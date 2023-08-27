import 'cypress-xpath'
describe('Adding Category', () => {
    before(() => {
        cy.visit('/')
        cy.xpath('//input[@id="email"]').type('azhari.iriansyah@gmail.com')
        cy.xpath('//input[@id="password"]').type('bismillah')
        cy.get('.chakra-button').click()
        cy.wait(3000)
        cy.url().should('include', '/dashboard')
    })

    it('Menambah Kategori', () => {
        cy.get('.css-1mqa38q')
            .contains('kategori')
            .click();
        cy.get('a.chakra-button').click()
        cy.xpath('//input[@id="nama"]').type('Nama')
        cy.xpath('//input[@id="deskripsi"]').type('Food description')
        cy.get('.chakra-button').click()
        cy.get('.chakra-toast')  // Select the toast element
            .should('be.visible')  // Assert that the toast is visible
            // .xpath('/html/body/div[2]/ul[3]/li/div')  // Move to the parent element
            .find('.css-1xy7m1b')  // Find all elements with class '.css-1xy7m1b'
            .click(); // Click the first element with class '.css-1xy7m1b'
        cy.xpath('//*[@id="menu-button-53"][@class="chakra-menu__menu-button css-kya9f"]').click()
        cy.xpath('//*[@id="menu-list-53-menuitem-51"][@class="chakra-menu__menu-button css-vuzh5r"]').click()
        cy.wait(2000)
        cy.url().should('include', 'https://kasirdemo.belajarqa.com')
    })

})
