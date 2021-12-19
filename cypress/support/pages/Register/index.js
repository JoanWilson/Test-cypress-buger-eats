import { generate } from 'gerador-validador-cpf'
const element = require('../Register/elements').Elements

class RegisterPage {
    acessarPaginaDeCadastro() {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app/deliver')
    }

    preencherPaginaDeCadastro() {

        var userRegistrationObject = {
            nome: 'Joan Wilson',
            cpf: generate(),
            email: 'joan@hotmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '18305186',
                rua: 'Travessa dos Colibris',
                numero: '100',
                complemento: 'Apto 10A',
                bairro: 'Jardim Colonial',
                Cidade: 'Capão Bonito',
                Estado: 'São Paulo/SP'
            },
            metodoEntrega: 'Moto',
            cnh: '/assets/cnh-digital.jpg'
        }
        //Preenchendo Campos
        cy.get(element.inputName).type(userRegistrationObject.nome)
        cy.get(element.inputCPF).type(userRegistrationObject.cpf)
        cy.get(element.inputEmail).type(userRegistrationObject.email)
        cy.get(element.inputWhatsapp).type(userRegistrationObject.whatsapp)
        cy.get(element.inputCEP).type(userRegistrationObject.endereco.cep)
        cy.get(element.buttonBuscarCEP).click()
        cy.get(element.inputNumeroDaResidencia).type(userRegistrationObject.endereco.numero)
        cy.get(element.inputComplemento).type(userRegistrationObject.endereco.complemento)
        cy.contains(element.buttonMetodoDeEntrega, userRegistrationObject.metodoEntrega).click()
        cy.get(element.attachFileCNH).attachFile(userRegistrationObject.cnh)
        cy.get(element.buttonEnviarFormulario).click()
        cy.get(element.mensagemDeEnvio).should('have.text', 'Aí Sim...')
        cy.get(element.buttonFecharFormulario).click()
        cy.url().should('eq', element.urlHomePage)
    }

}

export default new RegisterPage