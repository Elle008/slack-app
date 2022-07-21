export const syncWithLocal = (key, data, setter) => {
	const saved = JSON.parse(localStorage.getItem(key))
	if (!saved) {
		localStorage.setItem(key, JSON.stringify(data))
	}
	else {
		setter(prev => ({...prev, name: saved.name}))
	}
}

export const addChanneltoLocal = (key, newData) => {
  const temp = JSON.parse(localStorage.getItem(key))
	temp.workspaces.push(newData)
	localStorage.setItem(key, JSON.stringify(temp))
}

export const loadLocal = (key, setter) => {
	const local = JSON.parse(localStorage.getItem(key))
	setter(local)
}

export const getUsername = (id, setter) => {
	const localData = JSON.parse(localStorage.getItem(id))
	setter(prev => ({...prev, name: localData.name}))
}
