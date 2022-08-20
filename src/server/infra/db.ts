/* eslint-disable no-console */
import mongoose from 'mongoose'
import { getEnv } from '../config'

export const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return
    }

    const dbLocalUriEnv = getEnv('DB_LOCAL_URI')

    await mongoose.connect(dbLocalUriEnv)
    console.info('===> database is connected')
  } catch (error: unknown) {
    console.error(error)
    throw Error('Mongoose connect Error')
  }
}
