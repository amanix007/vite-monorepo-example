export const schema = {
  description: 'Returns a product',
  tags: ['Inventory'],

  params: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'Product identifier'
      }
    }
  }
}
