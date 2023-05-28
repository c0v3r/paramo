import Page from './page.js';

/**
 * Pop Up page
 */
class PopUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get close() {
        return $("//button[@title='Close (Esc)']");
    }
}

export default new PopUpPage();