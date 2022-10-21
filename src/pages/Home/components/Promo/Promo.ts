import { Component, createElement } from 'lib'
import Swiper from 'swiper'
import './Promo.scss'

const slidesRaw = [
	{
		id: 0,
		title: 'Онлайн-сервис<br />доставки їжі на дім',
		text: 'Страви із полюбленого ресторану привезе<br />курьер в перчатках, масці і с антисептиком',
		color: '--color-gold-2',
		backgroundImage: 'pizza'
	},
	{
		id: 1,
		title: 'Шашлики на травневі<br />зі скидкою 35%',
		text: 'Закажіть шишлики в любому ресторані до 10 травня<br />та отримайте скидку по промокоду PROMO',
		color: '--color-geekblue-2',
		backgroundImage: 'kebab'
	},
	{
		id: 2,
		title: 'Скидка 20% на всю їжу<br /> по промокоду VEGET',
		text: 'Страву з ресторану привезуть разом<br />с двома безкоштовними книгами по фронтенду',
		color: '--color-green-3',
		backgroundImage: 'vegetables'
	},
	{
		id: 3,
		title: 'Сети по скидкі до 30% в ресторанах',
		text: 'Скидки на сети до 30 травня<br />по промокоду DADADA',
		color: '--color-gray-3',
		backgroundImage: 'sushi'
	}
]

const slides = slidesRaw.map(slide => {
	return {
		...slide,
		backgroundImage: require(`../../assets/images/promo/${slide.backgroundImage}.png`)
	}
})
class Promo extends Component<{}, {}> {
	componentDidMount() {
		const swiper = new Swiper('#home-promo-swiper')
	}

	render() {
		return createElement(
			'div',
			{
				key: 'home-promo',
				className: 'swiper promo animate__animated animate__pulse',
				id: 'home-promo-swiper'
			},
			createElement(
				'div',
				{
					key: 'swiper-wrapper',
					className: 'swiper-wrapper'
				},
				...slides.map(slide => {
					return createElement(
						'div',
						{
							key: 'swiper-slide',
							className: 'swiper-slide promo--slide',
							style: `background-image: url(${slide.backgroundImage}); background-color: var(${slide.color})`
						},
						createElement('h2', {
							key: 'home-promo-title',
							className: 'promo--title',
							innerHTML: slide.title
						}),
						createElement('div', {
							key: 'home-promo-text',
							className: 'promo--text',
							innerHTML: slide.text
						})
					)
				})
			)
		)
	}
}

export default Promo
