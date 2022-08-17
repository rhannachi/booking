/* eslint-disable no-console */
import mongoose from 'mongoose'
import 'dotenv/config'

const DB_LOCAL_URI = process?.env?.DB_LOCAL_URI

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  if (!DB_LOCAL_URI) {
    throw Error('DB_LOCAL_URI not found')
  }

  try {
    await mongoose.connect(DB_LOCAL_URI)
    console.info('===> database is connected:')
  } catch (error: unknown) {
    console.error(error)
    throw Error('Mongoose connect Error')
  }
}

export default dbConnect
