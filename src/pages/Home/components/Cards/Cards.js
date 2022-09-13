import { getRestaurants } from 'api'
import { createElement, htmlStringToElement } from 'helpers'
import Search from 'assets/images/favicons/search.svg'

import { Card } from '..'

import './Cards.scss'

const Cards = () => {
	// TODO: Change it to import from async and rerender
	const restaurants = getRestaurants()

	const searchIcon = htmlStringToElement(Search)
	searchIcon.classList.add('cards--filter-icon')

	return createElement('div', {
		className: 'cards',
		childs: [
			createElement('div', {
				className: 'cards--head-wrapper',
				childs: [
					createElement('h2', {
						className: 'cards--title',
						textContent: 'Ресторани'
					}),
					createElement('div', {
						className: 'cards--filter',
						childs: [
							searchIcon,
							createElement('input', {
								className: 'cards--filter-input',
								type: 'text',
								placeholder: 'Пошук страв та ресторанів'
							})
						]
					})
				]
			}),
			createElement('div', {
				className: 'cards--wrapper',
				childs: [
					...restaurants.map(info => {
						info.image = require(`assets/images/${info.image}.jpg`)
						return Card(info)
					})
				]
			})
		]
	})
}

export default Cards
