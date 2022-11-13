import LoadIcon from 'components/LoadIcon'
import { createElement } from 'helpers'
import { getRestaurantByProducts } from 'api'
import './RestaurantHeader.scss'

const RestaurantHeader = async (products, className, dataBase = null) => {
	const StarElement = LoadIcon('star', 'card--star')

	const DATA =
		dataBase === null ? await getRestaurantByProducts(products) : dataBase

	console.log('%cRestaurantHeader.js line:10 DATA', 'color: #007acc;', DATA)
	const { stars, price, kitchen, name } = DATA
	const formattedPrice = `Від ${price} ₴`

	const el = document.querySelector(`.${className}`)

	el.append(
		createElement('div', {
			className: 'restaurant-header',
			childs: [
				createElement('div', {
					className: 'restaurant-title',
					textContent: name
				}),
				createElement('div', {
					className: 'card--bottom-wrapper',
					childs: [
						createElement('div', {
							className: 'card--stars',
							childs: [StarElement, stars]
						}),
						createElement('div', {
							className: 'card--bottom-inner-wrapper',
							childs: [
								createElement('div', {
									className: 'card--price',
									textContent: formattedPrice
								}),
								createElement('div', {
									className: 'card--dote'
								}),
								createElement('div', {
									className: 'card--type',
									textContent: kitchen
								})
							]
						})
					]
				})
			]
		})
	)
}

export default RestaurantHeader
