// a diferença entre array e objeto é que o obj é mais detalhado nos seus indices e pra uma aplicação mais avançadas seria a melhor opção pois seus indices são nomeados e naão numerados ... nomeados de acordo com o elemento criado e tambem podendo atribuir uma funcçao dentro do mesmo...

// array:... obs: tambem é um objeto , pois são da mesma classe / mesma origem...
let num = [1, 2, 3, 4,]

// objeto
let pessoa = {nome: 'joao',
                idade: 45,
                peso: 90,
                engordando(p=0){
                    console.log('Engordou')
                    this.peso += p // nesta linha ele atribuiu mais peso a pessoa...
                }
            }
pessoa.engordando(4)
            //OBS: this é uma referencia e objeto...
//console.log(pessoa.nome, pessoa.idade)
console.log(`${pessoa.nome} pesa ${pessoa.peso}`)

let n = 8
n **= 2
console.log(n)