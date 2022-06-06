import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

Given("I go to twitter signup page",()=>{
    cy.visit("https://twitter.com/i/flow/signup?context=webintent")
})

Then("I should see Join Twitter today",()=>{
    cy.get("Join Twitter today")
})

When("I click on sign up with email or phone number",()=>{
    cy.get("Sign up with phone or email").click()
})

Then("I should see the form 1 of 5",()=>{
    cy.get("Step 1 of 5")
})

When("",()=>{
    
})

Then("",()=>{
    
})