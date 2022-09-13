import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import { createElement } from 'helpers'

import './style/style.scss'

const app = document.querySelector('#app')

const main = createElement('main', {
	className: 'main',
	child: Home()
})

app.append(Header())
app.append(main)
app.append(Footer())
