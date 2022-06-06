import {Given, When,Then} from "cypress-cucumber-preprocessor/steps"

    Given("I visit the website",()=>{
            cy.visit("http://automationpractice.com")
    })

    Then("I should see the homepage",()=>{
        cy.get("#header_logo")
    })


    When("I add one item to cart",()=>{
        cy.get("a[data-id-product='3']").click({force:true,multiple:true})
       /* cy.get('span[title="Continue shopping"]')
           .click()
        cy.get("#homefeatured")
         .click()
        cy.get("a[href='http://automationpractice.com/index.php?controller=cart&add=1&id_product=6&token=e817bb0705dd58da8db074c69f729fd8']")
          .click({multiple:true,force:true})*/
    })
       
        When("I add another item to cart",()=>{
            cy.get('a[href="http://automationpractice.com/index.php?controller=order"]')
                .click({multiple:true})
            
         
    })
    