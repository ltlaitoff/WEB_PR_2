import { Cards, Promo } from './components'
import { createElement } from 'helpers'

const Home = () => {
	const homeElement = createElement('div', {
		className: 'home-page',
		childs: [Promo(), Cards()]
	})

	return homeElement
}

export default Home
