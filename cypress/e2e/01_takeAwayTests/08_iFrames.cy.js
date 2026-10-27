it('Iframes Read Only', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.frameLoaded('#mce_0_ifr')
    cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .and('be.visible')
        .should('contain.text', 'Your content goes here.')
})
