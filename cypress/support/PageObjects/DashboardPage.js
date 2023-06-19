export class DashboardPage {

    dashboard_logo='.header__brand-image > img'

    verifysuccessfullLogin(){
        cy.get(this.dashboard_logo).should('be.visible').and('exist')
    }

    


}