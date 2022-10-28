import partners from './partners.json'
import pizzaPlus from './pizza-plus.json'
import tanuki from './tanuki.json'
import foodBand from './food-band.json'
import palkiSkalki from './palki-skalki.json'
import gusiLebedi from './gusi-lebedi.json'
import pizzaBurger from './pizza-burger.json'

export default {
	restaurants: partners,
	restaurantsDishes: {
		'pizza-plus': pizzaPlus,
		tanuki: tanuki,
		'food-band': foodBand,
		'palki-skalki': palkiSkalki,
		'gusi-lebedi': gusiLebedi,
		'pizza-burger': pizzaBurger
	}
}
