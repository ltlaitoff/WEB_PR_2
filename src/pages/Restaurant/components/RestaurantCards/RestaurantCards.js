import { createElement } from 'helpers'
import { getRestaurantDishes } from 'api'
import { RestaurantCard } from '..'

import './RestaurantCards.scss'

const RestaurantCards = async (id, className, cardsInfoBase = null) => {
	const cardsInfo =
		cardsInfoBase === null ? await getRestaurantDishes(id) : await cardsInfoBase

	const data = cardsInfo.map(item => {
		return { ...item, image: require(`assets/images/${item.image}`) }
	})

	const el = document.querySelector(`.${className}`)

	el.append(
		createElement('div', {
			className: 'restaurant-cards',
			childs: data.map(item => RestaurantCard(item))
		})
	)
}

export default RestaurantCards
