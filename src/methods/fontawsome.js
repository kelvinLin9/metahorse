// FontAwesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' //main.js自己出現的重複了?

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faCashRegister } from '@fortawesome/free-solid-svg-icons'
/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'

// fontawesome
/* add icons to the library */
library.add(faTwitter, faUserSecret, faTwitch, faBasketShopping, faCashRegister)
