const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if(sexo === 'F'){
    if(sexo + idade >= 85){
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você não pode se aposentar!`)
    }
} else {
    if(sexo + idade >= 95){
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você não pode se aposentar!`)
    }
}