import { createElement } from 'helpers'
import { RestaurantCards, RestaurantHeader } from './components'

import './Restaurant.scss'
import { route } from 'router'

const Restaurant = params => {
	if (params.toString() === '') {
		route('/')
	}

	const products = params.get('products')

	RestaurantHeader(products, 'restaurant')
	RestaurantCards(products, 'restaurant')

	return createElement('div', {
		className: 'restaurant'
	})
}

export default Restaurant
