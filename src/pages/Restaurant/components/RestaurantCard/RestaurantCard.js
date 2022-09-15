import './RestaurantCard.scss'
import { createElement } from 'helpers'

const RestaurantCard = ({ title, descr, image, price }) => {
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

export default RestaurantCard
