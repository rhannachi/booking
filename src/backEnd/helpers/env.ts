import 'dotenv/config'

type NameToType = {
  readonly ENV: 'production' | 'staging' | 'development' | 'test'
  readonly DB_LOCAL_URI: string
}

export function getEnv(name: keyof NameToType): NameToType[keyof NameToType] {
  const val = process.env[name]

  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`)
  }

  return val
}
