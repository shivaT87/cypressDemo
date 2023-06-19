const { before, after } = require("mocha")
const { Acti_LoginPage } = require("../../support/ActiTime_PageObjects/Acti_LoginPage")
const { Acti_UsersPage } = require("../../support/ActiTime_PageObjects/Acti_UsersPage")

describe('Login Test cases',()=>{

    const userpage = new Acti_UsersPage
    const loginpage = new Acti_LoginPage

    before(()=>{
        const num = Date.now();
        const n = num.toString();
        cy.log(num)
        cy.log(n)
        cy.visit(Cypress.config().baseUrl)
        // loginpage.enterUsername('tshiva87@gmail.com')
        // loginpage.enterPassword('27may1987')
        // loginpage.clickLogin()
        loginpage.ActiTimeLogin()
        cy.get('.gettingStartedShortcutsMenuClose').click()
        // cy.get('.gettingStartedShortcutsMenu').then(($popup)=>{
        //     if($popup)
        // })
    })
    
    it('Create New User and delete it',()=>{
        userpage.clickUsersTab()
        userpage.clickNewUserButton()
        cy.wait(3000)
        const num = Date.now();
        //var timestamp = cy.moment().utc();
        cy.log(num)
        userpage.createNewUser('Auto1_'+num,'Test1_'+num,'Test1@gmail.com','QA')
        userpage.verifyUserinTable('Test1_'+num)
        userpage.deleteUser('Test1_'+num)
        
    })

    after(()=>{
        cy.wait(3000)
        cy.get('td.logoutCell > a.logout').click()
    })



})