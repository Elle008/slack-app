export const syncWithLocal = (key, data, setter) => {
	const saved = JSON.parse(localStorage.getItem(key))
	if (!saved) {
		localStorage.setItem(key, JSON.stringify(data))
	}
	if (saved) {
		setter((prev) => ({ ...prev, workspaces: saved.workspaces }))
	}
}

export const addWorkspaceToLocal = (key, newData) => {
	const temp = JSON.parse(localStorage.getItem(key))
	temp.workspaces.push(newData)
	localStorage.setItem(key, JSON.stringify(temp))
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
