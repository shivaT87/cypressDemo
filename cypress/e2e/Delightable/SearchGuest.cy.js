//import { After } from '@badeball/cypress-cucumber-preprocessor'
//import { after } from 'mocha'
//import { beforeEach } from 'mocha'
import {LoginPage} from '../../support/PageObjects/LoginPage'
import {DashboardPage} from '../../support/PageObjects/DashboardPage'
import { GuestsPage } from '../../support/PageObjects/GuestsPage'
import { after } from 'mocha'

const loginpage=new LoginPage
const dashboardpage= new DashboardPage
const guestpage= new GuestsPage

describe('LoginPage', function()
{

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function (data) {
        this.data=data
        

        cy.visit(this.data.Url)
        loginpage.enterUsername(this.data.UserName)
        loginpage.enterPassword(this.data.Password)
        loginpage.clickLogin()
        cy.wait(5000)
        cy.url().should('contain', 'dashboard') //Verify the url contains
        cy.title().should('include', 'Delightable').and('eq','Delightable | Dashboard') //Verify title of the page
        dashboardpage.dashboard_logo //Verify personica logo

        /*loginpage.getEmailfield().type(this.data.UserName)
        loginpage.getPasswordfield().type(this.data.Password)
        loginpage.getLoginbutton().click()
        cy.log('successful completion on before all')*/
    }) 
        
    })


    it('Search Guests', function(){

        guestpage.clickGuestsTab()
        guestpage.clickGuestSearchButton()
        guestpage.verifySerachGuestinGrid(this.data.Guestname)
        guestpage.clickViewGuestButton()
        guestpage.verifyCompleteGuestDetails(this.data.GuestFullName, this.data.GuestPhone)

        
        // cy.Search_Guest_details(this.data.Guestname, this.data.GuestFullName, this.data.GuestPhone, this.data.GuestBOD)
        // cy.xpath("//span[contains(text(),'Dashboard')]").click()
        // cy.wait(5000)
        // cy.xpath("//span[contains(text(),'Guests')]").click()
        // cy.wait(5000)
        // cy.get('select').select('10').should('have.value', '10')
        // cy.wait(5000)
        // cy.xpath("//div[text()='Logout']").click()
        // cy.log('successful completion on after all')


        
    }
    )

    after(()=>{
        cy.log('inside after all block')
        cy.go('back')
        cy.get("div.profile-picture__initial>svg>[text-anchor='middle']").click()
        cy.wait(3000)
        cy.xpath("//div[text()='Logout']").click()
        cy.log('successful completion on after all')
    })


}
)