import { createElement } from 'helpers'
import './Social.scss'
import { socialData } from './data'

const Social = () => {
	const listItems = socialData.map(info => {
		const img = info.icon
		img.classList.add('social--item-icon')

		const link = createElement('a', {
			className: 'social--item-link',
			href: info.href,
			child: img
		})

		const item = createElement('li', {
			className: 'social--item',
			child: link
		})

		return item
	})

	const social = createElement('ul', {
		className: 'social',
		childs: listItems
	})

	return social
}

export default Social
