describe('Cadastro', ()=>{
    it('Seja um entregador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Joan Wilson',
            cpf: '00000014141',
            email: 'joan@hotmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep:'04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento: 'Ap 142',
                bairro: 'Itaim Bibi',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Bicicleta',
            cnh: '/images/cnh-digital.jpg'
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(entregador.endereco.cep)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(3) > input').should('have.value', 'Rua Joaquim Floriano')
        cy.get(':nth-child(4) > :nth-child(1) > input').type(entregador.endereco.numero)
        cy.get(':nth-child(4) > :nth-child(2) > input').type(entregador.endereco.complemento)
        cy.get(':nth-child(5) > :nth-child(1) > input').should('have.value', 'Itaim Bibi')
        cy.get(':nth-child(5) > :nth-child(2) > input').should('have.value', 'São Paulo/SP')
        
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        
        cy.get('input[accept^="image"').attachFile(entregador.cnh)
        cy.get('.button-success').click()
        
        cy.get('#swal2-title').should('have.text', 'Aí Sim...')
    })
})