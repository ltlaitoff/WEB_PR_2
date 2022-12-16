import { Component, createElement } from 'lib'
import Cross from 'assets/images/favicons/cross.svg'

import './ShoppingCartHeader.scss'

interface ShoppingCartHeaderProps {
	onClose: () => void
}

class ShoppingCartHeader extends Component<ShoppingCartHeaderProps, {}> {
	render() {
		return createElement(
			'div',
			{
				key: 'shopping-cart--header',
				className: 'shopping-cart--header'
			},
			createElement('h3', {
				key: 'shopping-cart--header-title',
				className: 'shopping-cart--header-title',
				textContent: 'Корзина'
			}),

			createElement(
				'button',
				{
					key: 'shopping-cart--header-cross-button',
					className: 'shopping-cart--header-cross-button',
					onclick: () => this.props.onClose()
				},
				createElement('div', {
					key: 'shopping-cart--header-cross',
					className: 'shopping-cart--header-cross',
					innerHTML: Cross
				})
			)
		)
	}
}

export default ShoppingCartHeader

/*
	<div className="shopping-cart--header">
			<h3 className="shopping-cart--header-title"></h3>
			<button className="shopping-cart--cross"></button>
		</div>
*/
