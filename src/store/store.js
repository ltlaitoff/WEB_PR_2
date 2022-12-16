import dispather from './dispather'

let store = {
	shoppingCart: JSON.parse(localStorage.getItem('WEB') || '[]'),
	logged: false
}
let watchers = []

export const setStore = action => {
	store = structuredClone(dispather(store, action))

	console.log(store, watchers, action)
	localStorage.setItem('WEB', JSON.stringify(store.shoppingCart))
	watchers.forEach(callback => callback())
}

export const getStore = () => {
	return store
}

export const addWatcher = callback => {
	watchers.push(callback)
}
