import api from "../api/api"
import { allUsersURL } from "../api/url"

export const searchUser = async (user, email, setter, errorSetter) => {
  let allUsers = []
  let userId = null
  try {
    const response = await api.get(allUsersURL, {
      headers: {
        'expiry': user.expiry,
        'uid': user.email,
        'access-token': user.accessToken, 
        "client": user.client
        }
    })
    allUsers = response.data.data
  }
  catch (error) {
    return error;
  }

  allUsers.find( item => {
    if (item.email === email) {
      const inLocal = JSON.parse(localStorage.getItem(item.id))
      console.log(inLocal);
      setter(prev => ({...prev, id: item.id, name: inLocal.username, email: email}))
      userId =  item.id
    }
  })

  if (!userId) {
    errorSetter(`${email} is not a registered user`)
  }
}