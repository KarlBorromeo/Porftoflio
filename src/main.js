import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import route from './route.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter, faInstagram, faFacebook, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faBars, faX ,faDiamond, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'

//import header component
import TheHeader from './components/subComp/header/TheHeader.vue'
import ContactCard from './components/subComp/footer/ContactCard.vue'

library.add(faTwitter,faInstagram, faFacebook, faBars,faX, faDiamond, faCaretDown,faCaretUp, faWhatsapp)
const app = createApp(App);

app.use(store)
app.use(route)
app.component('the-header', TheHeader);
app.component('contact-card', ContactCard)
app.component('font-awesome-icon',FontAwesomeIcon)
app.mount('#app');

