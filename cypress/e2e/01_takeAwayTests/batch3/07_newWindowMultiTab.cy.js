beforeEach(() => {
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes("reading 'document'")) {
            return false
        }
    })
})
it('New Windows Multi Tab Handling ', () => {

    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('[href="/windows/new"]').invoke('removeAttr', 'target').click()
    cy.contains('New Window').should('be.visible')
    cy.go('back')
    cy.contains('Opening a new window')
})