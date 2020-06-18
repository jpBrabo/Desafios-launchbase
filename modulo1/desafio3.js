const usuario = {
    nome:"Mayk",
    empresa: {
        nome:"Rocketseat",
        cor:"roxo",
        foco:"programação",
        endereco:{
            rua:"Rua Guilherme Gembala",
            numero:260
        }
    }
}
console.log(`A ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua},${usuario.empresa.endereco.numero}`)