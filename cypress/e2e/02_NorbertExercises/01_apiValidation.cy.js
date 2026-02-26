
describe('Cypress Challenging DOM Column Validation', () => {
    it('extracts first column values and validates', () => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom');
        cy.get('table tbody tr td:first-child').then(($cells) => {

            const values = $cells.toArray().map(cell =>
                cell.innerText.trim()
            )
            expect(values).to.have.length.greaterThan(0); // Ensure we have some values
            const unique = [...new Set(values)];
            expect(unique).to.have.length(values.length); // Ensure all values are unique - aici ma pierde logica
        });
    });
});