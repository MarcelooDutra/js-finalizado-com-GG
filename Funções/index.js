function parImp(n){
    if(n%2==0){
        return'par'
    }else{
        return'impar'
    }
}

let n = parImp(12)
console.log(n)

//metodo somplificado abaixo:
console.log(parImp(12))

function soma(n1 =0, n2 = 0){
    return n1 + n2
}
console.log(soma(17, 19))


//inserindo uma função dentro de uma variavel:
let valores = function(n){
    return n*3
}
console.log(valores(7))


// brincando com fatoriais: Cria-se uma função fatorial, adiciona-se um parametro , cria-se uma variavel iniciando com 1 , cria-se uma repetição , e por fim retorna o proprio fatorial...
function factory(v){
    let ft = 1
    for(let p = v; p> 1; p-- ){
        ft *= p
    }
    return ft
}
console.log(factory(5))