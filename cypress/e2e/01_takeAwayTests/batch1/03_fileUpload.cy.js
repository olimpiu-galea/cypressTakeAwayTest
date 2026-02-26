it('File Upload',()=>
{
    cy.visit('https://the-internet.herokuapp.com/upload')

    cy.get('[id="file-upload"]').selectFile('cypress/fixtures/example.json')
    cy.get('[id="file-submit"]').click()
    cy.contains('File Uploaded!')
    cy.contains('File Uploaded!')
    cy.contains('example.json')


})