export const formatDate = (stringDate) => {
  const monthName = ['Jan' , 'Feb', 'Mar' , 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = monthName[new Date(stringDate).getMonth()]
  const day = new Date(stringDate).getDate()
  const hour = new Date(stringDate).getHours()
  const min = new Date(stringDate).getMinutes()

  return `${month} ${day} • ${hour}:${min}`
}