export const isEmpty = (obj: object): boolean => {
  return Object.keys(obj)?.length === 0
}

export const toNumber = (str: string, byDefault: number): number => {
  const strToNumber = Number(str)

  if (isNaN(strToNumber)) {
    return byDefault
  } else {
    return strToNumber
  }
}
