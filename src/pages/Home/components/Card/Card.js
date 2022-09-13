import { createElement, htmlStringToElement } from 'helpers'
import Star from 'assets/images/favicons/star.svg'

import './Card.scss'

const Card = ({ name, stars, image, minPrice, time, type }) => {
	// TODO: Change cards to links
	const StarElement = htmlStringToElement(Star)
	StarElement.classList.add('card--star')

	const formattedPrice = `Від ${minPrice} ₴`
	const formattedTime = `${time} хв.`

	return createElement('div', {
		className: 'card',
		childs: [
			createElement('div', {
				className: 'card--image',
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
}

export default Card
