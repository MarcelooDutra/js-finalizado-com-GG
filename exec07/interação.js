let valor = document.getElementById('txtn')
let lista = document.getElementById('txtc')
let res = document.getElementById('res')

//cria-se um vetor com uma array vazia
let vetores = []

//cria-se uma função para a ação do butão copiar e pra isso criamos uma condição onde precisa-se digitar um numero e não pode constar na lista..
// dentro desta função para que imprima e apareca o valor dentro da lista vamos utilizar algumas ferramentas... a variavel vetores.push para adc um elemento , criar um item utilizando o createElement e appendChild para inserir o item na lista...
function copiar(){
    if(umNumero(valor.value) && !emLista(valor.value, vetores)){
        vetores.push(Number(valor.value))
        let item = document.createElement('option')
        item.text = `O valor ${valor.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''// apagar apos adc um novo valor ...
    }else{
        window.alert('Digite um número válido')
    }
     //dentro da funçaõ copiar onde acontecerá a ação chamamos a variavel valores recebendo uma string vazia para que se apague automaticamente da caixa do formulario e a mesma variavel acrecida da ferramenta focus() para que o curso foque no formulario e permaneça piscando na mesma...

     valor.value = '' // a chamada do formulario chamada com string vazia
    valor.focus()// a chamada seguido da ferramenta focus para que o cursor permaneça piscando no formulario...
}
    

//cria-se uma função para o formulario onde digitamos o numero. criamos uma condição onde o parametro do vlor juntamente com o obj Number condicionando o seguinte ... se v que é o parametro do valor for maior ou igual a 1 e menor ou igual a 100 vai retornar verdadeiro, caso contrario, falso e não imprimindo o valor...
function umNumero(v){
    if(Number(v) >= 1 && Number(v) <= 100){
        return true
    }else{
        return false
    }
}

//cria-se aqui uma função para lista. Onde vai conter dois parametros de lista e numero. Lançamos uma condição onde l de lista seguido da ferramenta indexOf seguido de Number e o parametro de valor que é o v seja diferente utilizando a esclamação na frente de -1 ... sendo diferente de -1 ele retorna true ... quer dizer que nenhum valor foi encontra então pode ser adc na lista caso contrario retorna false não imprimindo o valor na lista...
function emLista(v, l){
    if(l.indexOf(Number(v)) != -1){
        return true
    }else{
        return false
    }
}

// vamos dar ação ao botão de encerrar...
function encerrar(){
    if(vetores.length == 0){//pega a variavel do vetor vazio e se toda a extensão da lista estiver sem valor gera um alert...como informa abaixo...
        window.alert('Adicione um numero antes de encerrar')
    }else{
        let total = vetores.length
        let maior = vetores [0]
        let menor = vetores [0]
        let soma = 0
        let media = 0
        for(pos in vetores){
            soma += vetores[pos]
            if(vetores[pos] > maior)
            maior = vetores [pos]
            if(vetores[pos] < menor)
            menor = vetores[pos]
        }
        media = soma / total
        res.innerHTML = ''// para que apague a resposta assim que for adc um novo valor
        res.innerHTML += `<p>O total de numeros adc na lista são ${total}</p>`
        res.innerHTML += `<p>O maior numero adc na lista é: ${maior}</p> `
        res.innerHTML += `<p>O menor numero adc na lista é: ${menor}</p>`
        res.innerHTML += `<p>A media dos numeros da lista é ${media}<p/>`
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
    }
}

