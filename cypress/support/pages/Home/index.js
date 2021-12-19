const element = require('../Home/elements').Elements

class HomePage {
    verificarSeOAppEstaOnline(){
        cy.viewport(1440,900)
        cy.visit(element.urlHome)
        cy.get(element.title).should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    }

    acessarTelaDeCadastro(){
        cy.get(element.button).click()
        cy.url().should('eq',element.urlCadastro)
    }
}

export default new HomePage()