export class GuestsPage {

    guests_tab="//span[contains(text(),'Guests')]"
    guests_serach_button='.justify-content-between > :nth-child(2) > .d-flex > :nth-child(1)'
    guests_serachfield='#filter'
    guests_in_grid="table[class='table']>tbody>tr:nth-of-type(n)"
    guests_view_button='.d-flex > .btn--secondary'
    guests_edit_button='.d-flex > .btn--tertiary'
    guest_fullname='div.d-flex h2'
    guest_phone='.profile__contact > .card__content > :nth-child(2) > .col-md-8 > span'

    clickGuestsTab(){
        cy.xpath(this.guests_tab).click()
    }

    clickGuestSearchButton(){
        cy.get(this.guests_serach_button).click()
    }

    clickViewGuestButton(){
        cy.get(this.guests_view_button).click()
    }

    clickEditGuestButton(){
        cy.get(this.guests_edit_button).click()
    }

    verifySerachGuestinGrid(Guestname){
        cy.get(this.guests_serachfield).click()
        cy.wait(5000)
        cy.get(this.guests_serachfield).type(Guestname)
        cy.wait(5000)
        //cy.xpath("//label[text()='Filter']").type(Guestname)
        cy.get('select').select('1').should('have.value', '1')
        //cy.wait(5000)
        cy.get(this.guests_in_grid).should('have.length',1)
    }

    verifyCompleteGuestDetails(GuestFullName,GuestPhone){
        cy.wait(5000)
        cy.get(this.guest_fullname).should('have.text',GuestFullName)
        cy.get(this.guest_phone).should('have.text',GuestPhone)
    }




}