it('Dynamic Controls', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_controls')
    cy.get('[id="checkbox-example"]').should('exist')
    cy.get('[onclick="swapCheckbox()"]').click()
    cy.contains('Wait for it...').should('not.be.visible')
    cy.get('[id="checkbox"]').should('not.exist')

    cy.get('[onclick="swapCheckbox()"]').click()
    cy.contains('Wait for it...').should('not.be.visible')
    cy.get('[id="checkbox"]').should('be.visible')


    cy.get('[onclick="swapInput()"]').click()
    cy.contains('Wait for it...').should('not.be.visible')
    cy.get('[type="text"]').should('be.enabled').type('Text')
    cy.get('[type="text"]').should('have.value','Text')

})