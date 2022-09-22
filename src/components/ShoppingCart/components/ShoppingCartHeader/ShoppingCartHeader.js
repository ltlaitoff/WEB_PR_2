import './ShoppingCartHeader.scss'
import { createElement } from 'helpers'
import LoadIcon from 'components/LoadIcon'

const ShoppingCartHeader = () => {
	const header = createElement('div', {
		className: 'shopping-cart--header',
		childs: [
			createElement('h3', {
				className: 'shopping-cart--header-title',
				textContent: 'Корзина'
			}),
			LoadIcon('cross', 'shopping-cart--header-cross')
		]
	})

	return header
}

export default ShoppingCartHeader

/*
	<div className="shopping-cart--header">
			<h3 className="shopping-cart--header-title"></h3>
			<button className="shopping-cart--cross"></button>
		</div>
*/
