import HomeIcon from 'favicons/home.svg'
import { createElement, htmlStringToElement } from 'helpers'
import './Search.scss'

const Search = () => {
	const icon = htmlStringToElement(HomeIcon)
	icon.classList.add('search--icon')

	const input = createElement('input', {
		className: 'search--input',
		type: 'text',
		placeholder: 'Адреса доставки'
	})

	const search = createElement('div', {
		className: 'search',
		childs: [icon, input]
	})

	return search
}

export default Search
