it(' UI Login Success',()=>
{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('[name="username"]').type('tomsmith')
    cy.get('[name="password"]').type('SuperSecretPassword!')
    cy.contains('button','Login').click()

    cy.url().should('contain','/secure')
    cy.contains('You logged into a secure area!')
    cy.contains('Welcome to the Secure Area. When you are done click logout below.')

})

it(' UI Login Failure Scenarios',()=>
{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('[name="username"]').type('tomsmith1')
    cy.get('[name="password"]').type('SuperSecretPassword!')
    cy.contains('button','Login').click()

   cy.contains('Your username is invalid!')
    
    
})