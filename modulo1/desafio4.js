const nome = "João"
const idade = 12
const tecnologias = {
    propriedade: [
        { nome: "JavaScript", especialidade: "Web/Mobile" },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: "C++", especialidade: "Desktop" }
    ]
};
console.log(`O usuário ${nome} tem ${idade} anos e usa a tecnologia ${tecnologias.propriedade[0].nome} com especialidade em ${tecnologias.propriedade[0].especialidade}`)