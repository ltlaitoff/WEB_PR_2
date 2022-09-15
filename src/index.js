import Header from 'components/Header'
import Footer from 'components/Footer'

import { createElement } from 'helpers'
import { router } from './router'
import './style/style.scss'

const app = document.querySelector('#app')

const main = createElement('main', {
	className: 'main'
})

app.append(Header())
app.append(main)
app.append(Footer())

router(main)
