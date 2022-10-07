import { Component, createElement, createText } from 'lib'
import './LoginModal.scss'
import Cross from '../../assets/images/favicons/cross.svg'
import { createComponent } from '../../../packages/reactiveLibrary/virtual_dom'
import LoginModalButton from './LoginModalButton'

const KEY = 'login-modal'

interface LoginModalProps {
	show: boolean
	onClose: () => void
	onSubmit: ({ login, password }: { login: string; password: string }) => void
}

interface LoginModalState {
	loginText: string
	loginError: boolean
	passwordText: string
	passwordError: boolean
}

class LoginModal extends Component<LoginModalProps, LoginModalState> {
	state: LoginModalState = {
		loginText: '',
		loginError: false,
		passwordText: '',
		passwordError: false
	}

	loginText = ''
	loginError = false
	// passwordText = ''
	// passwordError = false

	currentTargetType = ''

	onLoginError(error: boolean) {
		// this.setState(state => ({
		// 	...state,
		// 	loginError: error
		// }))
	}

	onPasswordError(error: boolean) {
		// this.setState(state => ({
		// 	...state,
		// 	passwordError: error
		// }))
	}

	onLoginSubmit(text: string) {
		console.log(text, this.state)

		this.setState(state => ({
			...state,
			loginText: text
		}))
	}

	onPasswordSubmit(text: string) {
		this.setState(state => ({
			...state,
			passwordText: text
		}))
	}

	closeModal() {
		this.props.onClose()
	}

	submitModal(e: Event) {
		e.preventDefault()

		console.log(e)

		console.log(
			// @ts-expect-error
			Array.from(e.target.querySelectorAll('input')).reduce(
				(acc: object, el) => {
					console.log(el)
					return {
						...acc,
						// @ts-expect-error
						[el.name]: el.value
					}
				},
				{}
			)
		)

		if (this.state.loginText === '' || this.state.passwordText === '') {
			alert('Заповніть всі поля')
			return
		}

		this.props.onSubmit({
			login: this.state.loginText,
			password: this.state.passwordText
		})
	}

	render() {
		console.log(this.state)

		if (this.props.show === false) {
			return createElement('div', {
				key: `${KEY}`
			})
		}

		return createElement(
			'div',
			{
				key: `${KEY}`
			},
			createElement(
				'div',
				{
					key: `${KEY}-all`,
					className: `${KEY}-all`
				},
				createElement(
					'div',
					{
						key: `${KEY}-body`,
						className: `${KEY}-body`
					},
					createElement('button', {
						key: `${KEY}-close`,
						className: `${KEY}-close`,
						innerHTML: Cross,
						onclick: () => this.closeModal()
					}),

					createElement(
						'form',
						{
							key: `${KEY}-form`,
							className: `${KEY}-form`,
							onsubmit: (e: Event) => this.submitModal(e)
						},
						createElement(
							'h2',
							{
								key: `${KEY}-form-title`,
								className: `${KEY}-form-title`
							},
							createText('Authorization')
						),
						createElement(
							'label',
							{
								key: `${KEY}-form-label`,
								className: `${KEY}-form-label`
							},
							createText('Login'),
							createComponent(LoginModalButton, {
								KEY: KEY,
								key: 'login-login-buton',
								type: 'text',
								name: 'login',
								value: this.state.loginText,
								onError: (error: boolean) => this.onLoginError(error),
								onSubmit: (text: string) => this.onLoginSubmit(text)
							})
						),
						createElement(
							'label',
							{
								key: `${KEY}-form-label`,
								className: `${KEY}-form-label`
							},
							createText('Password'),
							createComponent(LoginModalButton, {
								KEY: KEY,
								key: 'login-password-buton',
								type: 'password',
								name: 'password',
								value: this.state.passwordText,
								onError: (error: boolean) => this.onPasswordError(error),
								onSubmit: (text: string) => this.onPasswordSubmit(text)
							})
						),
						createElement(
							'button',
							{
								key: `${KEY}-form-button`,
								className: `${KEY}-form-button`
							},
							createText('Submit')
						)
					)
				)
			)
		)
	}
}

export default LoginModal
