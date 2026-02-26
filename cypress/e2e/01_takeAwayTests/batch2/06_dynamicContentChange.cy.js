beforeEach(() => {
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes("reading 'document'")) {
            return false
        }
    })
})
it('Dynamic Content Change Verification', () => {

    cy.visit('https://the-internet.herokuapp.com/dynamic_content')
    cy.get('[id="content"]').children().children().last().invoke('text').then((text) => {
        cy.log(text)

        cy.reload()

        cy.get('[id="content"]').children().children().last().invoke('text').then((text2) => {
            expect(text).not.be.eq(text2)
        })
    })
})