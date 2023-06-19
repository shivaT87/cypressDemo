export class Acti_LoginPage{
    
    email_textbox="input#username"
    password_textbox="//input[@name='pwd']"
    login_button="//a[@id='loginButton']/div"
    
    enterUsername(username){
        cy.get(this.email_textbox).type(username)
    }

    enterPassword(password){
        cy.xpath(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.xpath(this.login_button).click()

    }

    ActiTimeLogin(){
        this.enterUsername("stelamani_ic@fishbowl.com")
        this.enterPassword("27may1987")
        this.clickLogin()
    }
}