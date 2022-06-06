import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

Given("I go to Hero sign in page",()=>{
    cy.visit("https://herotesting.zendesk.com/chat/agent",{timeout:150000})
})

/*Then("I should see Sign in to Hero",()=>{
    cy.get('#signin_title',{timeout:150000}).should("contain.text","Sign in to HERO")
})*/

Then("I enter the username",()=>{
    cy.get('input[type="email"]',{timeout:150000}).type("product-inegrations@sayhero.com")
})

Then("I enter the password",()=>{
    cy.get('input[#user_password]').type("yem3HICH7tord.prox")
})

Then("I click the enter button",()=>{
    cy.click()
})
