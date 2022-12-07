import { Database } from '@vue-vite-monorepo/database'

export async function handler (_, reply) {
  const connection = await Database.open()

  try {
    const products = await connection.getProducts()

    reply.send({
      products
    })

  } finally {
    await connection.close()
  }
}
