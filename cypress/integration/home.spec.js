import HomePage from '../support/pages/Home'

describe('home page', ()=>{
    it('app deve estar online', ()=>{
        HomePage.verificarSeOAppEstaOnline()
    })

    it('ao clicar no botão, o usuário deve ser redirecinado', ()=> {
        HomePage.acessarTelaDeCadastro()
    })
})






