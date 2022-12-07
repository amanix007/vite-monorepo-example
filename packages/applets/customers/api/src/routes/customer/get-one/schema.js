export const schema = {
  description: 'Returns a customer',
  tags: ['Customers'],

  params: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'Customer identifier'
      }
    }
  }
}
