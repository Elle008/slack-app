import api from "./api"
import { headers } from "./headers"

export const allUsers = async (user, setUsers) => {
	try {
		const response = await api.get('/api/v1/users', {
			headers: headers,
		})
		setUsers(response.data.data) 
	} catch (error) {
		return error
	}
}


