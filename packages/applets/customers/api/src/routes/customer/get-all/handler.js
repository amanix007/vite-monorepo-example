import { Database } from '@vue-vite-monorepo/database'

export async function handler (_, reply) {
  const connection = await Database.open()

  try {
    const customers = await connection.getCustomers()

    reply.send({
      customers
    })

  } finally {
    await connection.close()
  }
}
