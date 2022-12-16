import './RestaurantCard.scss'
import { createElement, openShoppingCart } from 'helpers'
import { getStore, setStore, addCardToStore, checkCartInStore } from 'store'
import { removeCardFromStore } from '../../../../store/actions'

const RestaurantCard = ({ id, name, description, image, price }) => {
	const formattedPrice = `${price} ₴`

	const buttonBuy = createElement('button', {
		className: 'restaurant-card-body-wrapper-button',
		textContent: 'Купити'
	})

	if (checkCartInStore(id) !== undefined) {
		buttonBuy.classList.add('restaurant-card-body-wrapper-button-added')
		buttonBuy.textContent = 'Куплено'
	}

	buttonBuy.addEventListener('click', e => {
		if (checkCartInStore(id) === undefined) {
			setStore(addCardToStore({ id, name, price }))
			e.target.classList.add('restaurant-card-body-wrapper-button-added')
			e.target.textContent = 'Куплено'
			return
		}

		setStore(removeCardFromStore({ id, name, price }))
		e.target.classList.remove('restaurant-card-body-wrapper-button-added')
		e.target.textContent = 'Купити'
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
