import { Component, createElement } from 'lib'
import './ShoppingCartFooter.scss'

interface ShoppingCartFooterProps {
	onClose: () => void
	allPrice: () => number
	save: () => void
}

class ShoppingCartFooter extends Component<ShoppingCartFooterProps, {}> {
	render() {
		return createElement(
			'div',
			{
				key: 'shopping-cart--footer',
				className: 'shopping-cart--footer'
			},

			createElement('div', {
				key: 'shopping-cart--footer-all-price',
				className: 'shopping-cart--footer-all-price',
				textContent: this.props.allPrice()
			}),

			createElement(
				'div',
				{
					key: 'shopping-cart--footer-wrapper',
					className: 'shopping-cart--footer-wrapper'
				},

				createElement('button', {
					key: 'shopping-cart--footer-create-order',
					className: 'shopping-cart--footer-create-order',
					textContent: 'Оформити замовлення',
					onclick: () => this.props.save()
				}),

				createElement('button', {
					key: 'shopping-cart--footer-cancel',
					className: 'shopping-cart--footer-cancel',
					textContent: 'Відміна',
					onclick: () => this.props.onClose()
				})
			)
		)
	}
}

export default ShoppingCartFooter

/*
<div className="shopping-cart--footer">
			<div className="shopping-cart--all-price"></div>
			<button className="shopping-cart--create-order"></button>
			<button className="shopping-cart--cancel"></button>
		</div>
*/
