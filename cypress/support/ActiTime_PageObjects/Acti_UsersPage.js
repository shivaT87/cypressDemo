import { assert } from "chai"

export class Acti_UsersPage{

    users_tab="//div[text()='Users']"
    departments_button="//div[@class='userList_manageButtons_component_manageGroupsButton']/div"
    newUser_button="//div[text()='New User']"
    accounts_permission_button="//div[normalize-space( text() ) = 'Accounts & Permissions' ]"
    show_disabled_accounts_checkbox="//label[@class='components_checkboxContainer']/span[2]"
    copy_settings_from_button="//div[text()='Copy settings from']"
    firstname_textbox="//input[@id='createUserPanel_firstNameField']"
    lastname_textbox="//input[@id='createUserPanel_lastNameField']"
    emailId_textbox="//input[@id='createUserPanel_emailField']"
    department_dropdown=".simpleListMenuButton"
    save_and_send_invitation_button="//div[text() = 'Save & Send Invitation']"
    newuser_permission_tab="//div[@class='permissions']/span[text() = 'PERMISSIONS']"
    manage_departments_window="groupManagementLightBox"
    manage_departments_usercontainer="//div[@id='groupManagementLightBox_userContainer']"
    manage_departments_groupcontainer="//div[@id='groupManagementLightBox_groupContainer']"
    close_button_newusercreation="//div[@class='createUserPanel_accountCreatedContainer']/div[@class='closeLink']/span"


    clickUsersTab(){
        cy.xpath(this.users_tab).click()
    }

    clickDepartmentsButton(){
        cy.xpath(this.departments_button).click()
    }

    clickNewUserButton(){
        cy.xpath(this.newUser_button).click()
    }

    createNewUser(firstName,lastName,emailId,departmentname){
        cy.xpath(this.firstname_textbox).type(firstName)
        cy.xpath(this.lastname_textbox).type(lastName)
        cy.xpath(this.emailId_textbox).type(emailId)
        cy.get(this.department_dropdown).click()
        cy.get('.itemsContainer').contains(departmentname).click()
        
        //cy.select(this.department_dropdown).select(departmentname).should('have.value', departmentname)
        //cy.xpath(this.copy_settings_from_button).click()
        cy.xpath(this.save_and_send_invitation_button).click()
        cy.wait(5000)
        cy.xpath(this.close_button_newusercreation).click()

    }

    verifyUserinTable(userName){
        cy.xpath("//table[@class='userListTable canEditUsers sortByName']/tbody/tr//div[@class='name']//span[@class='userNameSpan']")
        .each(($e1,index,$list)=>{
            var name=$e1.text()
            //cy.log(name)
            if(name.includes(userName)){
                cy.log('User Found')
                assert.isTrue
            }
        })

    }
    
    deleteUser(userName){
        cy.xpath("//table[@class='userListTable canEditUsers sortByName']/tbody/tr//div[@class='name']//span[@class='userNameSpan']")
        .each(($e1,index,$list)=>{
            var name=$e1.text()
            
            //cy.log(name)
            if(name.includes(userName)){
               $e1.click()
               cy.xpath("//div[@class='deleteButton actionButton']").click()
            }
        })

    }

}