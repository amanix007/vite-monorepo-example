import { Customer, Product } from '@vue-vite-monorepo/model'
import { delay } from '@vue-vite-monorepo/utilities'
import { Configuration} from './configuration'

/**
 * Rudimentary API client based on `window.fetch`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
export class APIClient {
  constructor ({ url } = {}) {
    if (!url) throw new Error('API base URL is required')
    this.url = url
  }

  /**
   * API base URL
   */
  url

  /**
   * Returns a specified customer
   * @param id Customer identifier
   */
  async getCustomer (id) {
    const response = await this.request({ path: `customer/${id}` })
    if (response.error) {
      this.handleError(response)
    } else {
      // We type-cast the received data, so that
      // on the front-end we can use the exact same
      // model as on the back-end
      return new Customer(response.result.customer)
    }
  }

  /**
   * Returns all customers
   */
  async getCustomers () {
    const response = await this.request({ path: 'customer' })
    if (response.error) {
      this.handleError(response)
    } else {
      return response.result.customers.map(customer => new Customer(customer))
    }
  }

  /**
   * Returns a specified product
   * @param id Product identifier
   */
  async getProduct (id) {
    const response = await this.request({ path: `product/${id}` })
    if (response.error) {
      this.handleError(response)
    } else {
      // We type-cast the received data, so that
      // on the front-end we can use the exact same
      // model as on the back-end
      return new Product(response.result.product)
    }
  }

  /**
   * Returns all products
   */
  async getProducts () {
    const response = await this.request({ path: 'product' })
    if (response.error) {
      this.handleError(response)
    } else {
      return response.result.products.map(product => new Product(product))
    }
  }

  /**
   * Runs a HTTP request with the specified parameters
   * @param path Path to request, relative to {@link baseUrl}
   * @param method HTTP method, default is GET
   * @param query Optional dictionary of query parameters to add to the request URL
   * @param data Optional data to submit with the request
   * @description This also streamlines inconsistent handling of errors by window.fetch()
   * which will throw exceptions for network errors, but won't throw for HTTP errors.
   * Here in both cases we just return `{ error }` with other relevant details.
   */
  async request ({ path = '', method = 'get', query, data }) {
    try {
      const requestUrl = new URL(this.url + '/' + path)
      requestUrl.search = new URLSearchParams(query).toString()

      const headers = {
        'Content-Type': 'application/json'
      }

      const requestOptions = {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers,
        body: data ? JSON.stringify(data) : undefined
      }

      // A little delay, to simulate long-running operation
      await delay(2000)

      const response = await fetch(requestUrl, requestOptions)
      const { ok, status, statusText } = response
      const result = await response.json() || {}

      if (ok) {
        return { status, result }
      } else {
        return { status, path, method, error: new Error(statusText) }
      }

    } catch (error) {
      return { path, method, error }
    }
  }

  /**
   * Trivial API error handler
   */
  handleError ({ status, path, method, error }) {
    console.error(`${method} ${path} ERROR ${status}`)
    console.error(error)
  }
}

/**
 * Returns API client instance initialized with default configuration
 */
export function getAPIClient () {
  return new APIClient(Configuration.api)
}