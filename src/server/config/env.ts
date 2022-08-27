type NodeEnvType = 'development' | 'production' | 'test'

interface EnvType {
  dbUri: string
}

export const getEnv = (): EnvType => {
  let env: EnvType = {
    dbUri: ''
  }

  try {
    const nodeEnv = process.env.NODE_ENV as NodeEnvType

    if (nodeEnv !== 'development' && nodeEnv !== 'production' && nodeEnv !== 'test') {
      throw new Error('Env Error: NODE_ENV undefined')
    }

    let dbUri = ''

    if (nodeEnv === 'development') {
      dbUri = process.env?.DEV_DB_URI ?? ''

      if (!dbUri) {
        throw new Error('Env Error: DEV_DB_URI undefined')
      }
    }

    if (nodeEnv === 'test') {
      dbUri = process.env?.TEST_DB_URI ?? ''

      if (!dbUri) {
        throw new Error('Env Error: TEST_DB_URI undefined')
      }
    }

    if (nodeEnv === 'production') {
      dbUri = process.env?.PROD_DB_URI ?? ''

      if (!dbUri) {
        throw new Error('Env Error: PROD_DB_URI undefined')
      }
    }

    env = {
      dbUri
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  } finally {
    return env
  }
}
