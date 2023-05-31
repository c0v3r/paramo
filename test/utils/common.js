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
}
export default new Common();