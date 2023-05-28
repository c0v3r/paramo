import Page from './page.js';

/**
 * Registration Success page
 */
class RegistrationSuccessPage extends Page {
    /**
     * define selectors using getter methods
     */
    get congratulations () {
        return $('h1[class="notification__title"]');
    }
}

export default new RegistrationSuccessPage();
