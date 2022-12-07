export class Customer {
  constructor (data = {}) {
    Object.assign(this, data)
  }

  /**
   * Customer identifier
   */
  id

  /**
   * Company name
   */
  name

  /**
   * Person first name
   */
  firstName

  /**
   * Person last name
   */
  lastName

  /**
   * Person full name
   */
  get fullName () {
    const { name, firstName, lastName } = this
    return name
      ? name
      : [firstName || '', lastName || ''].join(' ')
  }
}
