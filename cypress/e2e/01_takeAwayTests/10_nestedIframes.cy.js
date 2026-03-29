it('Nested Iframes - Content Extraction',()=>
{
    cy.visit('https://the-internet.herokuapp.com/nested_frames')
    cy.iframe('[name="frame-bottom"]').should('contain','BOTTOM')

    cy.iframe('[name="frame-top"]').within(()=>{
        cy.iframe('[name="frame-middle"]').should('contain','MIDDLE')
    })
})