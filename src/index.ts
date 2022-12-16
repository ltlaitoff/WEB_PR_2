/* eslint-disable indent*/
/* eslint-disable no-mixed-spaces-and-tabs*/
import {
	createComponent,
	createElement,
	createText,
	renderDOM,
	Component
} from 'lib'

import { route, router } from './router'
import './style/style.scss'

// router(main)

import Header from './components/Header'

import LoginModal from './components/LoginModal'
import { setLoggedValue, setStore } from './store'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

interface AppState {
	logged: boolean
	logginModalShow: boolean
	shoppingCartShow: boolean
}

class App extends Component<{}, AppState> {
	state: AppState = {
		logged: false,
		logginModalShow: false,
		shoppingCartShow: false
	}

	setLogged(value: boolean) {
		this.setState(state => ({
			...state,
			logged: value
		}))
	}

	setShoppingCartShow(value: boolean) {
		this.setState(state => ({
			...state,
			shoppingCartShow: value
		}))
	}

	shoppingCartOpen() {
		this.setShoppingCartShow(true)
	}

	shoppingCartClose() {
		this.setShoppingCartShow(false)
	}

	loginModalOpen() {
		this.setState(state => ({
			...state,
			logginModalShow: true
		}))
	}

	loginModalClose() {
		this.setState(state => ({
			...state,
			logginModalShow: false
		}))
	}

	onSubmit({ login, password }: { login: string; password: string }) {
		if (login === 'user' && password === '123') {
			alert('Ви успішно ввійшли')

			setStore(setLoggedValue(true))

			this.setLogged(true)
			this.loginModalClose()
			return
		}

		alert('Помилка в логіні або паролі')
	}

	componentDidMount() {
		router({
			onSignIn: () => {
				this.loginModalOpen()
			}
		})
	}

	render() {
		return createElement(
			'main',
			{ key: 'main' },
			createComponent(Header, {
				key: 'header',
				logged: this.state.logged,
				onSignIn: () => {
					this.loginModalOpen()
				},
				onShoppingCartOpen: () => this.shoppingCartOpen()
			}),
			createElement('div', {
				key: 'items',
				id: 'router-view'
			}),
			createElement('footer', { key: 'footer' }),

			this.state.logginModalShow === true
				? createComponent(LoginModal, {
						key: 'login-modal',
						onClose: () => this.loginModalClose(),
						onSubmit: ({ login, password }) =>
							this.onSubmit({ login, password })
				  })
				: createElement('div', { key: 'empty' }),

			this.state.shoppingCartShow === true
				? createComponent(ShoppingCart, {
						key: 'shopping-cart-modal',
						onClose: () => this.shoppingCartClose()
				  })
				: createElement('div', { key: 'empty' })
		)
	}
}

renderDOM('app', createComponent(App, { key: 'app' }))

// router(document.querySelector('#router-view'))
