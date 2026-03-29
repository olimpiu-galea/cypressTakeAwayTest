it('Iframes Read Only',()=>
{
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.get('[class="tox-notification__dismiss tox-button tox-button--naked tox-button--icon"]').click()
    cy.iframe('[id="mce_0_ifr"]').should('be.visible')
    cy.iframe('[id="mce_0_ifr"]').should('have.text','Your content goes here.')
})