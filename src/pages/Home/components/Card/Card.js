import { createElement, htmlStringToElement } from 'helpers'
import Star from 'assets/images/favicons/star.svg'

import './Card.scss'
import { route } from '../../../../router/router'

const Card = ({ name, stars, image, minPrice, time, type }) => {
	const StarElement = htmlStringToElement(Star)
	StarElement.classList.add('card--star')

	const formattedPrice = `Від ${minPrice} ₴`
	const formattedTime = `${time} хв.`

	const card = createElement('a', {
		className: 'card',
		onClick: () => {
			console.log('click')
		},
		childs: [
			createElement('div', {
				className: 'card--image',
				onClick: () => {
					console.log('click')
				},
				style: `background-image: url(${image})`
			}),
			createElement('div', {
				className: 'card--body',
				childs: [
					createElement('div', {
						className: 'card--head-wrapper',
						childs: [
							createElement('h3', {
								className: 'card--title',
								onClick: () => {
									console.log('click')
								},
								textContent: name
							}),
							createElement('div', {
								className: 'card--time',
								textContent: formattedTime
							})
						]
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
		]
	})

	card.addEventListener('click', () => route('/restaurant'))

	return card
}

export default Card
