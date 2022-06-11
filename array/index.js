/*let num = [1,2,3,5,4]
let pos = 0
for(let pos = 0; pos<num.length; pos++){
    console.log(num[pos])//na hora de imprimir tem que colocar num[pos]
}*/

//num[5]= 8

//metodo para adc elemento na array inidicando qual indice(posição quer que adicione):

//num.push(7)

//- este 7 não é o indice e sim um numero que vai ser adc. o push não precisa indicar o indice ele ja adc no ultimo direto...

//push adc um elemento na array:


//metodo de ordenação dos elementos utilizamos o sort():

/*num.sort()
console.log(num)*/

let numeros = [4,7,3,2,8,9,0]
let pos = 0
numeros.sort()
/*for(let pos =0; pos<numeros.length;pos++){
    console.log(`A posição dos numeros ${numeros[pos]} `)
}*/

//uma outra forma de utilizar repetições de formas mais simples é : for(variavel in indice)... so serve para objetos e vetores...
for(let pos in numeros){//para cada posição dentro do array vai imprimir os numeros ...
    console.log(`O numero ${numeros[pos]} esta na posição ${pos}`)
}

function divisao(v){
    if(v%2==0){
        return 'par'
    }else{
        return 'impar'
    }
}
let v = divisao(10)
console.log(v)

