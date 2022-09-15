import './RestaurantHeader.scss'
import { createElement } from 'helpers'
import Star from 'assets/images/favicons/star.svg'
import { htmlStringToElement } from '../../../../helpers/htmlStringToElement'

const RestaurantHeader = () => {
	const stars = 4.5
	const minPrice = 40
	const type = 'Піцца'

	const StarElement = htmlStringToElement(Star)
	StarElement.classList.add('card--star')

	const title = 'Тануки'

	const formattedPrice = `Від ${minPrice} ₴`

	return createElement('div', {
		className: 'restaurant-header',
		childs: [
			createElement('div', {
				className: 'restaurant-title',
				textContent: title
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
								textContent: type
							})
						]
					})
				]
			})
		]
	})
}

export default RestaurantHeader
