import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from '../../../../support/PageObjects/LoginPage'

const loginpage=new LoginPage

Given('Open delightable application',function()
{
    const loginpage=new LoginPage
        cy.visit(this.data.Url)
        
})

When('enter valid credentials and login', function()
{
    loginpage.getEmailfield().type(this.data.UserName)
        loginpage.getPasswordfield().type(this.data.Password)
        loginpage.getLoginbutton().click()
}
)

Then('Validate successful login', ()=>
{
    cy.url().should('contain', 'dashboard')
}
)

Then('Validate complete guest details', function()
{
    cy.Search_Guest_details(this.data.Guestname, this.data.GuestFullName, this.data.GuestPhone, this.data.GuestBOD)
}
)