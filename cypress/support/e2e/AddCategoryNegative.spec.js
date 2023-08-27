import 'cypress-xpath'
describe('Adding Category Without Fill Name', () => {
    before(() => {
        cy.visit('/')
        cy.xpath('//input[@id="email"]').type('azhari.iriansyah@gmail.com')
        cy.xpath('//input[@id="password"]').type('bismillah')
        cy.get('.chakra-button').click()
        cy.url().should('include', '/dashboard')
    })

    it('Add Category Without Fill Name', () => {
        cy.get('.css-1mqa38q')
            .contains('kategori')
            .click();
        cy.get('a.chakra-button').click()
        cy.xpath('//input[@id="deskripsi"]').type('Food description')
        cy.get('.chakra-button').click()
        cy.get('.chakra-alert')  // Select the toast element
            .should('be.visible')  // Assert that the toast contains "Success"
            .contains('"name" is not allowed to be empty');  // Assert that the toast contains "item ditambahkan"
    })
})