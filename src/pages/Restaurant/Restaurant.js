import { createElement } from 'helpers'
import { RestaurantCards, RestaurantHeader } from './components'

import './Restaurant.scss'

const Restaurant = () => {
	const cards = RestaurantCards()

	console.log(cards)

	return createElement('div', {
		className: 'restaurant',
		childs: [RestaurantHeader(), cards]
	})
}

export default Restaurant
