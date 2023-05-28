class Common {

    /**
     * Function that waits (seconds) for an element to disappear
     */
    async waitForDisapeears(element, timeout) {
        await browser.pause(2000)
        let isDisplayed = await element.isDisplayed()
        console.log("Is visible the element?: " + isDisplayed);

        if (isDisplayed == true) {
            for (let i = 0; i < timeout; i++) {
                isDisplayed = await element.isDisplayed()
                console.log("Is visible the element?: " + isDisplayed);
                await browser.pause(1000)
                console.log("Waiting for " + (timeout - i) + ' seconds');
                if (isDisplayed == false) {
                    break
                }
            }
        }
    }

    /**
     * Function to execute common steps in the login feature
     */
    async loginFlow() {
        const SplashPage = require("../pages/splashPage.js")
        const LoginPage = require("../pages/loginPage.js")
        const { expect } = require('chai');
        const Login = require("../fixtures/users.json")

        let splashPage = new SplashPage();
        let loginPage = new LoginPage()

        await browser.pause(5000);
        expect(true)
            .to.equal(await splashPage.getDeepBlueImg.isDisplayed(), "Splash page was not displayed.")
        await browser.pause(1000);
        await splashPage.getSignInLink.click()

        expect(await loginPage.getSignInToDeepBlueLbl.getText()).
            to.equal('Sign in to DeepBlue', "Login page was not displayed.")
        await loginPage.login(Login['validUser'])
    }


    /**
     * Function to handle the error screen (Android only)
     */
    async errorScreenHandler() {
        const SplashPage = require("../pages/splashPage.js")
        const LoginPage = require("../pages/loginPage.js")
        const { expect } = require('chai');
        const Login = require("../fixtures/users.json")

        let loginPage = new LoginPage()

        if (loginPage.getSignInButton.isDisplayed() == true) {
            console.log('SignInButton is still displayed')
            await browser.pause(2000);
        }
        let timeout = 30
        await this.waitForDisapeears("//*[@text='Error loading page']", timeout)
    }
}
export default new Common();