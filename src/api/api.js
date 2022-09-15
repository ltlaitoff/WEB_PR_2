import DATA from './data.json'
import { loadAPIImagesRestaurants } from 'helpers'

const getRestaurants = () => {
	return loadAPIImagesRestaurants(DATA.restaurants)
}

const getRestaurantDishes = () => {
	return DATA.CARDS_NOT_USE_IT_IN_PROD
}

export { getRestaurantDishes, getRestaurants }
