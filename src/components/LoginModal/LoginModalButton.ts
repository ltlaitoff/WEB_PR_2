import { Component, createElement } from 'lib'

interface LoginModalButtonProps {
	KEY: string
	type: string
	value: string
	name: string
	onError: (error: boolean) => void
	onSubmit: (text: string) => void
}

interface LoginModalButtonState {
	text: string
	error: boolean
}

class LoginModalButton extends Component<
	LoginModalButtonProps,
	LoginModalButtonState
> {
	state: LoginModalButtonState = { text: '', error: false }

	// constructor({ KEY, type, value, onError, onSubmit }: LoginModalButtonProps) {
	// 	super()
	// 	this.state = { text: value, error: false }
	// }

	public componentDidMount(): void {
		this.setState(state => ({ ...state, text: this.props.value }))
	}

	onChange(e: InputEvent) {
		const text = (e.target as HTMLInputElement).value
		const error = text.length === 0

		if (this.state.error !== error) {
			this.props.onError(error)
		}

		this.setState(() => ({
			text: text,
			error: error
		}))
	}

	onBlur() {
		console.log(this.state.text)
		this.props.onSubmit(this.state.text)
	}

	onKeyDown(e: KeyboardEvent) {
		console.log(e.code)

		if (e.code === 'enter') {
			this.props.onSubmit(this.state.text)
		}
	}

	render() {
		// console.log(this.state)

		console.log('rerender', this.state)
		return createElement('input', {
			key: `${this.props.KEY}-form-input`,
			type: this.props.type,
			className: `${this.props.KEY}-form-input ${
				this.state.error ? `${this.props.KEY}-form-input-error` : ''
			}`,
			name: this.props.name,
			value: this.state.text,
			oninput: (e: InputEvent) => this.onChange(e),
			onblur: () => this.onBlur(),
			onkeydown: (e: KeyboardEvent) => this.onKeyDown(e)
		})
	}
}

export default LoginModalButton
