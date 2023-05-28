import Page from './page.js';

/**
 * Sign Up page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#core__protected_modules_user_yiiForm_RegistrationForm_email');
    }

    get inputPassword () {
        return $('#core__protected_modules_user_yiiForm_RegistrationForm_password');
    }

    get inputConfirmPassword () {
        return $('#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get chkTermsConditions () {
        return $("label[for='core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions']");
    }

    get optNoBonus () {
        return $("label[for='bonus-0']");
    }

    /**
     * Method to fill-up the form
     */
    async fill () {
        await this.chkTermsConditions.click();
        await this.optNoBonus.click();
        await this.inputUsername.setValue(`${await this.generateString()}@email.com`);
        await this.inputPassword.setValue("SuperSecretPassword!9");
        await this.inputConfirmPassword.setValue("SuperSecretPassword!9");
        await this.btnSubmit.click();
        await browser.pause(2000);
    }

    /**
     * Method to generate random strings
     */
    async generateString() {
        let length = 10;
        let characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        console.log('random: ' + result)
        return result;
    }
}

export default new SignUpPage();
