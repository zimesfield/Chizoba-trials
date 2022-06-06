import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

Given("I go to instagram sign in page",()=>{
    cy.visit("https://www.instagram.com/accounts/login/")
})

Then("I should see Instagram",()=>{
    cy.get('a[data-testid="sign-up-link"]').should("contain.text","Sign up")
})

Then("I enter the  instagram username",()=>{
    cy.get('input[name="username"]').type("cvalerie.ce@gmail.com")
})

Then("I enter the  wrong password",()=>{
    cy.get('input[name="password"]').type("yem3HICH7tord.prox")
})

Then("I click the signup button",()=>{
    cy.get("button[type='submit']").click()
})

Then("I should see incorrect password",()=>{
    cy.get("#slfErrorAlert").should("contain","Sorry, your password was incorrect. Please double-check your password.")
})

Then("I enter the right instagram username",()=>{
    cy.get('input[name="username"]').type("4ceeslocalmarket")
})

Then("I enter the  right password",()=>{
    cy.get('input[name="password"]').type("dfiubfiushfsun")
})

Then("I should see instagram homepage logo",()=>{
    cy.get('a[href="/"]')
})

When("I search for a valid instagram user",()=>{
    cy.get("input[aria-label='Search Input'").click({force:true}).type('chizoba_cv').type("{enter}")
})


Then("I should land on their homepage",()=>{
cy.get("h2").should("contain","chizoba_cv")
})