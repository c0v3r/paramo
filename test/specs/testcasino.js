import SignUpPage from "../pageobjects/signup.page.js";
import MainPage from "../pageobjects/main.page.js";
import PopUpPage from "../pageobjects/popup.page.js";
import RegistrationSuccessPage from "../pageobjects/registration.success.page.js"
import Common from "../utils/common.js"
import { expect as chaiExpect } from "chai";


describe("My challenge", () => {
  it("Validation of the game search", async () => {
    await MainPage.open();
    await Common.waitForDisapeears(await MainPage.loading, 30)
    await PopUpPage.close.click();
    await MainPage.searchBtn.click();
    await MainPage.inputSearch.setValue("Games");
    await MainPage.resultList.waitForDisplayed({ timeout: 9000 })
    
    for (let index = 1; index <= (await MainPage.amountResultsFound.length); index++) {
      let actualResult = await MainPage.getResultRow(index).getText();
    
      chaiExpect(actualResult.includes("Games"), "Text doesn't match: " + actualResult).to.be.true;
    }
  });

  it("Validation of user registration", async () => {
    await MainPage.open();
    await Common.waitForDisapeears(await MainPage.loading, 30)
    await MainPage.signUpBtn.click();
    await SignUpPage.fill();
    await RegistrationSuccessPage.congratulations.waitForDisplayed({ timeout: 9000 })
    let congrats = await RegistrationSuccessPage.congratulations.getText();
    
    chaiExpect(congrats.includes("Congratulations"), "Text doesn't match: " + congrats).to.be.true; 
  });
});