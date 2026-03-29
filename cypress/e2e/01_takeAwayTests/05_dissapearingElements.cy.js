it('Dissapearing Elements ', () => {

    cy.visit('https://the-internet.herokuapp.com/disappearing_elements')

    for (let i = 0; i < 5; i++) {
        cy.log(`Iteration ${i}`)

        cy.get('[href="/"]').parent().parent().children().should('have.length.at.least', 4)
        cy.reload()
    }
})