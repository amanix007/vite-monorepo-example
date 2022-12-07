import { Database } from '@vue-vite-monorepo/database'

export async function handler ({ params }, reply) {
  const connection = await Database.open()

  try {
    const { id } = params
    const customer = await connection.getCustomer(id)

    if (customer) {
      reply
        .send({
          customer
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
