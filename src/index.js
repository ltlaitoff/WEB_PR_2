import Header from 'components/Header'
import Footer from 'components/Footer'
import Container from 'components/Container'
import Home from 'pages/Home'

import './style/style.scss'

const app = document.querySelector('#app')

app.append(Container({ childs: [Header(), Home(), Footer()] }))
