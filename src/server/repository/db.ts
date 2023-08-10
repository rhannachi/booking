import mongoose from 'mongoose'
import { getEnv } from '../config'

export const dbConnect = async () => {
  try {
    const { dbUri } = getEnv()
    // console.info('===> ENV:', process.env)
    // console.info('===> DB_URI', dbUri)

    if (mongoose.connection.readyState >= 1) {
      return
    }

    await mongoose.connect(dbUri)

    // eslint-disable-next-line no-console
    console.info('===> database is connected')
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.error(error)
    throw Error('Mongoose connect Error')
  }
}
