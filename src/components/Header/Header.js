import SingInIcon from 'favicons/user.svg'
import ShoppingCartIcon from 'favicons/shopping-cart.svg'
import Logo from 'components/Logo'
import Search from './components/Search'
import ButtonWithIconAndText from './components/ButtonWithIconAndText'

import { createElement } from 'helpers'
import './Header.scss'

const Header = () => {
	const signInButton = ButtonWithIconAndText({
		buttonClass: 'header--button header--button-signin',
		iconClasses: ['header--button-icon', 'header--button-signin-icon'],
		icon: SingInIcon,
		text: 'Війти'
	})

	const shoppingCartButton = ButtonWithIconAndText({
		buttonClass: 'header--button header--button-shopping-cart',
		iconClasses: ['header--button-icon', 'header--button-shopping-cart-icon'],
		icon: ShoppingCartIcon,
		text: 'Корзина'
	})

	const buttonsWrapper = createElement('div', {
		className: 'header--buttons',
		childs: [signInButton, shoppingCartButton]
	})

	const header = createElement('header', {
		className: 'header',
		childs: [Logo(), Search(), buttonsWrapper]
	})

	return header
}

export default Header
