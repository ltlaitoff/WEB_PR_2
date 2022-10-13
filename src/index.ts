import {
	createComponent,
	createElement,
	createText,
	renderDOM,
	Component
} from 'lib'

import { router } from './router'
import './style/style.scss'

// router(main)

import Header from './components/Header'

import HOME_PAGE from './pages/Home'
import LoginModal from './components/LoginModal'

interface AppState {
	logged: boolean
	logginModalShow: boolean
}

class App extends Component<{}, AppState> {
	state: AppState = { logged: false, logginModalShow: false }

	setLogged(value: boolean) {
		this.setState(state => ({
			...state,
			logged: value
		}))
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
			this.setLogged(true)
			this.loginModalClose()
			return
		}

		alert('Помилка в логіні або паролі')
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
				}
			}),
			createElement('footer', { key: 'footer' }),
			createElement('div', { key: 'items', innerHTML: HOME_PAGE().outerHTML }),
			this.state.logginModalShow &&
				createComponent(LoginModal, {
					key: 'login-modal',
					onClose: () => this.loginModalClose(),
					onSubmit: ({ login, password }) => this.onSubmit({ login, password })
				})
		)
	}
}

renderDOM('app', createComponent(App, { key: 'app' }))
