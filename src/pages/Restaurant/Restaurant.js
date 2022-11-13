import { createElement } from 'helpers'
import { RestaurantCards, RestaurantHeader } from './components'
import { getDishesByNameIncludes } from 'api'

import './Restaurant.scss'
import { route } from 'router'

const Restaurant = params => {
	if (params.toString() === '') {
		route('/')
	}

	const products = params.get('products')
	const search = params.get('search')

	if (search) {
		RestaurantHeader(products, 'restaurant', {
			stars: 5,
			price: 500,
			kitchen: 'Search',
			name: 'Search'
		})
		RestaurantCards(products, 'restaurant', getDishesByNameIncludes(search))
	} else {
		RestaurantHeader(products, 'restaurant')
		RestaurantCards(products, 'restaurant')
	}

	return createElement('div', {
		className: 'restaurant'
	})
}

export default Restaurant
