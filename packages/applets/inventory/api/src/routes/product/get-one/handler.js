import { Database } from '@vue-vite-monorepo/database'

export async function handler ({ params }, reply) {
  const connection = await Database.open()

  try {
    const { id } = params
    const product = await connection.getProduct(id)

    if (product) {
      reply
        .send({
          customer: product
        })
    } else {
      reply
        .code(404)
        .send({ message: 'NOT FOUND' })
    }

  } finally {
    await connection.close()
  }
}
