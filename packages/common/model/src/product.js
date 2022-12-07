export class Product {
  constructor (data = {}) {
    Object.assign(this, data)
  }

  /**
   * Product identifier
   */
  id

  /**
   * Product code
   */
  code

  /**
   * Product name
   */
  name

  /**
   * Producer
   */
  producer

  /**
   * Category
   */
  category

  /**
   * Full product description
   */
  get description () {
    const parts = [
      capitalize(this.category),
      capitalize(this.name),
    ]
    return parts
      .map(p => p || '')
      .filter(p => p)
      .join(' ')
  }
}
