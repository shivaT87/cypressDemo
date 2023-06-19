//const { before } = require("mocha")

//const { before, beforeEach } = require("mocha")



describe('My First Test Suite',{testIsolation: false }, function()

{
 /*it.skip ('My First Test Case', function()
    {
       cy.visit("http://delightable-main.personica-intranet.com/")
        cy.get('#emailAddress').type('stelamani@personica.com')
        cy.get('#password').type('Personica@2023')
        cy.get("button[type='submit']").click()
    }
    )*/

    
    // before(() => {
    //     cy.log('before block')
    //     cy.visit("http://delightable-main.personica-intranet.com/")
    //     cy.get('#emailAddress').type('stelamani@personica.com')
    //     cy.get('#password').type('Personica@2023')
    //     cy.get("button[type='submit']").click()
    //     cy.reload()
    //     })

    before(() => {
        // ensure clean test slate for these tests
        //cy.then(Cypress.session.clearCurrentSessionData)
        
        
      })

    beforeEach(()=>{
        cy.session('login', ()=>{
            cy.visit("https://www.google.com/")
            //cy.title().should('eq','Google')
            //login();
        })
        

    })
   
    
    it('My 1st test case', function(){
        cy.log("1st it block")
    })

    it('My 2nd test case', function(){
        cy.log("2nd it block")
    })

    it('My 3rd test case', function(){
        cy.log("3rd it block")
        cy.xpath("//a[text()='Gmail']").click()
        cy.clearAllSessionStorage()
    })


     after(()=>{
        cy.clearAllCookies()
    })




    /*after(()=>{
        cy.reload()
        console.log("after block")
        cy.log("after block")
        cy.get("div.profile-picture__initial>svg>[text-anchor='middle']").click()
        cy.wait(3000)
        cy.xpath("//div[text()='Logout']").click()
        cy.log('successful completion on after all')
    })*/
    
}


)