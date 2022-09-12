import LogoIcon from 'favicons/logo.svg'
import { createElement, htmlStringToElement } from 'helpers'
import './Logo.scss'

const Logo = () => {
	const icon = htmlStringToElement(LogoIcon)
	icon.classList.add('logo--image')

	const title = createElement('h1', {
		className: 'logo--text',
		innerHTML: 'Delivery<br />food'
	})

	const logo = createElement('a', {
		className: 'logo',
		href: '#',
		childs: [icon, title]
	})

	return logo
}

export default Logo
