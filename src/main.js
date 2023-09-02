import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faBars, faX ,faDiamond} from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter,faInstagram, faFacebook, faBars,faX, faDiamond)
const app = createApp(App);

app.use(store)
app.component('font-awesome-icon',FontAwesomeIcon)
app.mount('#app');

