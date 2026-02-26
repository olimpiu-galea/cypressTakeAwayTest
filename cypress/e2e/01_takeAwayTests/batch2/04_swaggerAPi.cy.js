it('SwaggerApi Petstore', () => {
    cy.intercept('**/v2/pet/findByStatus?status=available').as('findByStatus')
    cy.intercept('**/v2/pet/*').as('getPetById')

    cy.visit('https://petstore.swagger.io/?utm_source=chatgpt.com')
    cy.contains('button', 'Allow all cookies').click()
    cy.get('[href="#/pet/findPetsByStatus"]').click()
    cy.contains('button', 'Try it out').click()
    cy.get('[value="available"]').parent().select(0)
    cy.get('[class="execute-wrapper"]').click()

    cy.wait('@findByStatus').then((xhr) => {
        cy.log(xhr)
        const firstPetId = xhr.response.body[0].id

        cy.get('[href="#/pet/findPetsByStatus"]').click()
        cy.get('[href="#/pet/getPetById"]').click()
        cy.contains('button', 'Try it out').click()
        cy.get('[placeholder="petId"]').clear().type(firstPetId)
        cy.get('[class="execute-wrapper"]').click()

        cy.wait('@getPetById').then((xhr) => {
            expect(xhr.response.statusCode).to.be.eq(200)
        })
    })
})