import '../style/style.css'
import '../style/modern-normalization.css'
import '../style/utils.css'
import '../style/components/header.css'
import '../style/components/hero.css'
import '../style/components/about.css'
import '../style/components/project.css'
import '../style/components/contact.css'
import '../style/components/footer.css'
import '../style/components/mobile-nav.css'
import mobileNav from '../utils/mobile-nav'
import resume from "../public/doc/CV-W1-Behroze.pdf"
import modeSwtich from '../src/mode.js'
import lazyLoad from '../utils/lazy-loading.js'
mobileNav()
modeSwtich()
lazyLoad()