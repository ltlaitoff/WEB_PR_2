import { ShoppingCartCard } from '..'
import { Component, createComponent, createElement } from 'lib'
import './ShoppingCartCards.scss'
import { setCard, setStore } from 'store'

interface ShopingCartHeaderProps {
	cards: any
}

class ShopingCartHeader extends Component<ShopingCartHeaderProps, {}> {
	onButtonPlusClick(id: string) {
		const card = this.props.cards.find((el: any) => el.id === id)
		card.count += 1

		setStore(setCard(card))
	}

	onButtonMinusClick(id: string) {
		const card = this.props.cards.find((el: any) => el.id === id)
		card.count -= 1

		setStore(setCard(card))
	}

	render() {
		console.log(this.props.cards)
		return createElement(
			'div',
			{
				key: 'shopping-cart--cards',
				className: 'shopping-cart--cards'
			},
			...this.props.cards.map((el: any) => {
				return createComponent(ShoppingCartCard, {
					key: el.id,
					id: el.id,
					title: el.name,
					price: el.price,
					count: el.count,
					onButtonPlusClick: id => this.onButtonPlusClick(id),
					onButtonMinusClick: id => this.onButtonMinusClick(id)
				})
			})
		)
	}
}

export default ShopingCartHeader
