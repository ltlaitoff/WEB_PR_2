import InstagramIcon from 'favicons/instagram.svg'
import TelegramIcon from 'favicons/telegram.svg'
import FacebookIcon from 'favicons/facebook.svg'
import { htmlStringToElement } from 'helpers'

export default [
	{
		id: 0,
		name: 'Instagram',
		icon: htmlStringToElement(InstagramIcon),
		href: null
	},
	{
		id: 1,
		name: 'Telegram',
		icon: htmlStringToElement(TelegramIcon),
		href: null
	},
	{
		id: 2,
		name: 'Facebook',
		icon: htmlStringToElement(FacebookIcon),
		href: null
	}
]
