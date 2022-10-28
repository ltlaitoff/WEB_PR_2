import './RestaurantCard.scss'
import { createElement, openShoppingCart } from 'helpers'
import { getStore, setStore, addCardToStore } from 'store'

const RestaurantCard = ({ id, name, description, image, price }) => {
	const formattedPrice = `${price} ₴`

	const buttonBuy = createElement('button', {
		className: 'restaurant-card-body-wrapper-button',
		textContent: 'Купити'
	})

	buttonBuy.addEventListener('click', () => {
		openShoppingCart()
		setStore(addCardToStore({ id, name, price }))
		console.log(getStore())
	})

	const card = createElement('div', {
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
						textContent: name
					}),
					createElement('div', {
						className: 'restaurant-card-body-descr',
						textContent: description
					}),
					createElement('div', {
						className: 'restaurant-card-body-wrapper',
						childs: [
							buttonBuy,
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

	card.style.setProperty('--animate-delay', `.${id / 2}s`)
	card.classList.add('animate__animated', 'animate__fadeInUp')

	return card
}

export default RestaurantCard
