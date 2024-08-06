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
import modeSwtich from '../src/mode.js'
import lazyLoad from '../utils/lazy-loading.js'

mobileNav()
modeSwtich()
lazyLoad()


const addDownloadListener = (selector, filePath, fileName) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        element.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
};

addDownloadListener('.btnCV', '/doc/CV.pdf', 'CV-Mern-Behroze.pdf');
addDownloadListener('.btnResume', '/doc/Resume.pdf', 'Resume-Mern-Behroze.pdf');