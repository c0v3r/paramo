import Page from './page.js';

/**
 * Main page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchBtn () {
        return $('#btn-search');
    }

    get inputSearch () {
        return $('input[placeholder="Search"]');
    }

    get amountResultsFound () {
        return $$('div[class="game-name"]');
    }

    get resultList () {
        return $('#search-widget-game-list');
    }

    get loading() {
        return $('div[class="lds-ellipsis"]');
    }

    get signUpBtn(){
        return $('a[href="/user/registration"] > span')
    }

    getResultRow (row) {
        browser.pause(5000);
        return $(`div.game-item:nth-child(${row}) > div:nth-child(2) > .game-name`);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new MainPage();