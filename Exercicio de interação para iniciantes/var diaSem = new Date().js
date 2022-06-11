var hoje= new Date()
var diaSem = hoje.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Dia inválido')
    break    
}

//OBS: O SWIT É BASTANTE UTILIZADO EM DADOS PONTUAIS... PARA DADOS ONDE UTILIZA-SE FUNCÇÕES RELACIONAIS(COM INTERVALOS) TORNA-SE MAIS VANTAJOSO UTILIZARMOS OS METODOS IF E ELSE...