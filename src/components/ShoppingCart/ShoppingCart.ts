import { Component, createElement, createComponent } from 'lib'
import { addWatcher, getCardsList } from 'store'

import {
	ShoppingCartHeader,
	ShoppingCartCards,
	ShoppingCartFooter
} from './components'

import './ShoppingCart.scss'

interface ShoppingCartProps {
	onClose: () => void
}

class ShoppingCart extends Component<ShoppingCartProps, {}> {
	store = {}

	public componentDidMount(): void {
		console.log('componentDidMount')
		addWatcher(() => {
			this.setState(s => {
				console.log(s)
				return {}
			})
		})
	}

	render() {
		const cards = getCardsList()
		console.log('ShoppingCart rerender')

		return createElement(
			'div',
			{
				key: 'shopping-cart',
				className: 'shopping-cart'
			},

			createElement(
				'div',
				{
					key: 'shopping-cart--body',
					className: 'shopping-cart--body'
				},

				createComponent(ShoppingCartHeader, {
					key: 'ShoppingCartHeader',
					onClose: () => this.props.onClose()
				}),

				createComponent(ShoppingCartCards, {
					key: 'ShoppingCartCards',
					cards: cards
				}),

				createComponent(ShoppingCartFooter, {
					key: 'ShoppingCartFooter',
					onClose: () => this.props.onClose(),
					allPrice: () =>
						cards.reduce((acc: any, cur: any) => acc + cur.price * cur.count, 0)
				})
			)
		)
	}
}

export default ShoppingCart
