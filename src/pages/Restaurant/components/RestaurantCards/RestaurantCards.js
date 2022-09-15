import { createElement } from 'helpers'

import './RestaurantCards.scss'

const cardsInfo = [
	{
		id: 0,
		title: 'Ролл угорь стандарт',
		descr: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
		image: '1',
		price: 250
	},
	{
		id: 1,
		title: 'Калифорния лосось стандарт',
		descr:
			'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
		image: '2',
		price: 360
	},
	{
		id: 2,
		title: 'Окинава стандарт',
		descr: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
		image: '3',
		price: 234
	},
	{
		id: 3,
		title: 'Цезарь маки хl',
		descr:
			'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
		image: '4',
		price: 562
	},
	{
		id: 4,
		title: 'Ясай маки стандарт 185 г',
		descr: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
		image: '5',
		price: 235
	},
	{
		id: 5,
		title: 'Ролл с креветкой стандарт',
		descr: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
		image: '6',
		price: 678
	}
]

const Card = ({ title, descr, image, price }) => {
	const formattedPrice = `${price} ₴`

	return createElement('div', {
		className: 'restaurant-card',
		childs: [
			createElement('div', {
				className: 'restaurant-card-image',
				style: `background-image: url(${image})`
			}),
			createElement('div', {
				className: 'restaurant-card-body',
				childs: [
					createElement('div', {
						className: 'restaurant-card-body-title',
						textContent: title
					}),
					createElement('div', {
						className: 'restaurant-card-body-descr',
						textContent: descr
					}),
					createElement('div', {
						className: 'restaurant-card-body-wrapper',
						childs: [
							createElement('button', {
								className: 'restaurant-card-body-wrapper-button',
								textContent: 'Купити'
							}),
							createElement('div', {
								className: 'restaurant-card-body-wrapper-price',
								textContent: formattedPrice
							})
						]
					})
				]
			})
		]
	})
}

const RestaurantCards = () => {
	const data = cardsInfo.map(item => {
		return { ...item, image: require(`assets/images/${item.image}.jpg`) }
	})

	// const cards = [...Array(3)].fill(card)

	// console.log(cards)

	return createElement('div', {
		className: 'restaurant-cards',
		childs: data.map(item => Card(item))
	})
}

export default RestaurantCards
