import Search from './components/Search'
import './Header.scss'
import { Component, createText, createElement, createComponent } from 'lib'
import Logo from '../Logo'
import HeaderButton from './components/HeaderButton'
import User from '../../assets/images/favicons/user.svg'
import ShoppingCart from '../../assets/images/favicons/shopping-cart.svg'

class Header extends Component<{}, {}> {
	render() {
		return createElement(
			'header',
			{ key: 'header', className: 'header' },
			createComponent(Logo, { key: 'logo' }),
			createComponent(Search, { key: 'Search' }),
			createElement(
				'div',
				{
					key: 'header-buttons',
					className: 'header--buttons'
				},
				createComponent(HeaderButton, {
					key: 'header-button-sign-in',
					id: 0,
					buttonClass: 'header--button-signin',
					icon: User,
					iconClass: 'header--button-signin-icon',
					text: 'Війти'
				}),
				createComponent(HeaderButton, {
					key: 'header-button-cart',
					id: 0,
					buttonClass: 'header--button-shopping-cart',
					icon: ShoppingCart,
					iconClass: 'header--button-shopping-cart-icon',
					text: 'Корзина'
				})
			)
		)
	}
}

export default Header
