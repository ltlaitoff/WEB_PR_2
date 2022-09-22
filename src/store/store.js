import dispather from './dispather'

let store = {}

export const setStore = action => {
	store = structuredClone(dispather(store, action))
}

export const getStore = () => {
	return store
}
