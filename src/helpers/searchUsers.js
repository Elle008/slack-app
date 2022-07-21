import api from "../api/api"
import { allUsersURL } from "../api/url"

export const allUsers = async (user, setUsers) => {
	try {
		const response = await api.get(allUsersURL, {
			headers: {
				expiry: user.expiry,
				uid: user.email,
				"access-token": user.accessToken,
				client: user.client,
			},
		})
		setUsers(response.data.data) 
	} catch (error) {
		return error
	}
}
