export const getData = (users, searchKey) =>
	users.find((item) => {
		return item.email === searchKey
	})