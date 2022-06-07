import {Given, When,Then} from "cypress-cucumber-preprocessor/steps"

    Given("I visit the website",()=>{
            cy.visit("http://automationpractice.com")
    })

    Then("I should see the homepage",()=>{
        cy.get("#header_logo")
    })


    When("I add one item to cart",()=>{
        cy.get("a[href='http://automationpractice.com/index.php?id_product=4&controller=product'][title='Printed Dress']").click({multiple:true,force:true})
        cy.get("#add_to_cart").click()
        cy.get("#columns").click()
        cy.get('a[href="http://automationpractice.com/index.php?id_category=8&controller=category"]').click({multiple:true,force:true})
    })
      
     When("I add another item to cart",()=>{
        cy.get("a[href='http://automationpractice.com/index.php?id_product=5&controller=product'][title='Printed Summer Dress']").click({multiple:true,force:true})
        cy.get("#add_to_cart").click()
     })
       
    When("I proceed to check out",()=>{ 
            cy.get('a[href="http://automationpractice.com/index.php?controller=order"]')
                .click({multiple:true})  
    })

    Then("I should see the items in my cart with two items in the cart",()=>{
            cy.get("")
    })
    