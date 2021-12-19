//<reference types="Cypress" />
import RegisterPage from '../support/pages/Register'

describe('Cadastro', () => {
    it('deve ser capaz de realizar um cadastro para login', () => {
        RegisterPage.acessarPaginaDeCadastro()
        RegisterPage.preencherPaginaDeCadastro()
    });
})
