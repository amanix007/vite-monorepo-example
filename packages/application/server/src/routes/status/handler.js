import pkg from '../../../package.json'

export async function handler (_, reply) {
  const { name, description, version } = pkg

  reply.send({
    status: {
      time: new Date(),
      name,
      version,
      description
    }
  })
}
