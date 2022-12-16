import {
	ADD_CARD_TO_STORE,
	REMOVE_CARD_FROM_STORE,
	CHANGE_CARD_PRICE,
	SET_LOGGED_VALUE,
	SET_CARD
} from './actions'

export default (store = {}, action) => {
	switch (action.type) {
		case ADD_CARD_TO_STORE: {
			const cart = { ...action.payload, count: 0 }
			store.shoppingCart.push(cart)

			return { ...store, shoppingCart: store.shoppingCart }
		}

		case REMOVE_CARD_FROM_STORE: {
			const shoppingCart = store.shoppingCart.filter(
				element => element.id !== action.payload.id
			)

			return { ...store, shoppingCart: shoppingCart }
		}

		case CHANGE_CARD_PRICE: {
			const shoppingCart = store.shoppingCart.map(element => {
				if (element.id === action.payload.id) {
					return { ...element, price: action.payload.price }
				}

				return element
			})

			return { ...store, shoppingCart: shoppingCart }
		}

		case SET_LOGGED_VALUE: {
			console.log('logged value set')
			return { ...store, logged: action.payload }
		}

		case SET_CARD: {
			const shoppingCart = store.shoppingCart.map(element => {
				if (element.id === action.payload.id) {
					action.payload
				}

				return element
			})

			return { ...store, shoppingCart: shoppingCart }
		}
	}

	return store
}
