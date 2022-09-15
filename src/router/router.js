const HOME_PAGE = import(/* webpackChunkName: "homePage" */ 'pages/Home')
const RESTAURANT_PAGE = import(
	/* webpackChunkName: "restaurantPage" */ 'pages/Restaurant'
)

const ROUTES = {
	'/': HOME_PAGE,
	'/restaurant': RESTAURANT_PAGE,
	'*': 'ERROR_PAGE'
}

export const route = path => {
	console.log(window.location.hash)

	window.location.hash = path

	console.log(window.location.hash)
}

let ROOT = document.createElement('template')

function router(root) {
	if (ROOT !== root) {
		ROOT = root
	}

	console.log(ROOT)

	const hash = '/' + window.location.hash.replace('#/', '')

	console.log(hash)
	const page = ROUTES[hash] || 'ERROR_PAGE'

	if (typeof page !== 'object') {
		ROOT.replaceChildren('Page not found')
		return
	}

	page.then(data => {
		ROOT.replaceChildren(data.default())
	})
}

window.onhashchange = () => router(ROOT)

export { router }
