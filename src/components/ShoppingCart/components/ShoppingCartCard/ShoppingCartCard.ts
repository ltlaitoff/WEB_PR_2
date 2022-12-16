import './ShoppingCartCard.scss'
import { Component, createElement } from 'lib'

interface ShoppingCartCardProps {
	id: string
	title: string
	price: number
	count: number
	onButtonPlusClick: (id: string) => void
	onButtonMinusClick: (id: string) => void
}

class ShoppingCartCard extends Component<ShoppingCartCardProps, {}> {
	render() {
		console.log(this.props)
		return createElement(
			'div',
			{
				key: 'shopping-cart--card',
				className: 'shopping-cart--card'
			},

			createElement('h4', {
				key: 'shopping-cart--card-title',
				className: 'shopping-cart--card-title',
				textContent: this.props.title
			}),

			createElement(
				'div',
				{
					key: 'shopping-cart--card-wrapper',
					className: 'shopping-cart--card-wrapper'
				},

				createElement('div', {
					key: 'shopping-cart--card-price',
					className: 'shopping-cart--card-price',
					textContent: this.props.price
				}),

				createElement(
					'div',
					{
						key: 'shopping-cart--card-buttons',
						className: 'shopping-cart--card-buttons'
					},

					createElement('button', {
						key: 'shopping-cart--card-button',
						className: 'shopping-cart--card-button',
						textContent: '-',
						onclick: () => this.props.onButtonMinusClick(this.props.id)
					}),
					createElement('span', {
						key: 'shopping-cart--card-count',
						className: 'shopping-cart--card-count',
						textContent: this.props.count
					}),
					createElement('button', {
						key: 'shopping-cart--card-button',
						className: 'shopping-cart--card-button',
						textContent: '+',
						onclick: () => this.props.onButtonPlusClick(this.props.id)
					})
				)
			)
		)
	}
}

export default ShoppingCartCard
