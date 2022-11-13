import DATA from './data'
import { loadAPIImagesRestaurants } from 'helpers'

const getRestaurants = async () => {
	return await loadAPIImagesRestaurants(DATA.restaurants)
}

const getRestaurantByProducts = async products => {
	return await DATA.restaurants.filter(
		restaurant => restaurant.products === products
	)[0]
}

const getRestaurantDishes = async name => {
	return await DATA.restaurantsDishes[name]
}

const getAllDishes = async () => {
	return await Object.values(DATA.restaurantsDishes).flat()
}

const getDishesByNameIncludes = async string => {
	return await (
		await getAllDishes()
	).filter(value => value.name.includes(string))
}

export {
	getRestaurantDishes,
	getRestaurants,
	getRestaurantByProducts,
	getDishesByNameIncludes
}
