import { Customer, Product } from '@vue-vite-monorepo/model'
import customerData from '../data/customers.json'
import productData from '../data/products.json'

/**
 * Database wrapper
 */
export class Database {
  /**
   * Connects to the database
   */
  static async open () {
    return new Database()
  }

  /**
   * Disconnects to the database
   */
  async close () {
  }

  /**
   * Returns all customers
   */
  async getCustomers () {
    const customers = customerData.map(item => new Customer(item))
    return customers
  }

  /**
   * Returns a customer
   * @param id Customer identifier
   */
  async getCustomer (id) {
    if (!id) throw new Error('Customer identifier is required')

    const customers = customerData.map(item => new Customer(item))
    const customer = customers.find(c => c.id == id)

    return customer
  }
  /**
   * Returns all products
   */
  async getProducts () {
    const products = productData.map(item => new Product(item))
    return products
  }

  /**
   * Returns a product
   * @param id Product identifier
   */
  async getProduct (id) {
    if (!id) throw new Error('Product identifier is required')

    const products = productData.map(item => new Product(item))
    const product = products.find(c => c.id == id)

    return product
  }
}