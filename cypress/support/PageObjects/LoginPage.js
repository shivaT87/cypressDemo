/*class LoginPage
{
    getEmailfield()
    {
        return cy.get('#emailAddress')
    }

    getPasswordfield()
    {
        return cy.get('#password')
    }

    getLoginbutton()
    {
        return cy.get("button[type='submit']")
    }

}
export default LoginPage;*/

export class LoginPage{
    
    email_textbox='#emailAddress'
    password_textbox='#password'
    login_button="button[type='submit']"
    
    enterUsername(username){
        cy.get(this.email_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()

    }
}
