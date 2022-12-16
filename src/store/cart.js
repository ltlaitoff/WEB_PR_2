import { getStore } from './store'

export const checkCartInStore = id => {
	return getStore().shoppingCart.find(cart => cart.id === id)
}

export const getCardsList = () => {
	return getStore().shoppingCart
}
