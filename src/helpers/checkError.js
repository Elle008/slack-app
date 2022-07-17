export const noError = (obj) => {
  return Object.values(obj).every(item => !item)
}