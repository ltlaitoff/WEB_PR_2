import DATA from './data.json'

const getRestaurants = () => {
	return DATA.restaurants
}

const getRestaurantDishes = () => {
	return DATA.CARDS_NOT_USE_IT_IN_PROD
}

export { getRestaurantDishes, getRestaurants }
