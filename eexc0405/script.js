function contar(){
    var ini = document.getElementById('vlci')
    var fim = document.getElementById('vlcf')
    var pass = document.getElementById('qdp')
    var res = document.getElementById('res') 

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('erro')
    }else{
        res.innerHTML= 'Contando... <br />'
        var v1 = Number(ini.value)
        var v2 = Number(fim.value)
         var p1 = Number(pass.value)
         if(p1 <= 0){
             window.alert('erro')
             //um erro que devemos ter atenção.(sempre que formos emitir alertas na web , não se usa document e sim so o window. alert ou prompt ou confirm...)
             p1=1
             //no caso se o passo for zero, cria-se outra condição onde , se p1 for menor ou igual a zero , cria-se um alert de erro e abaixo colocamos p1 recebe 1 para considerar esse 1 como opção de resposta.
         }

         if(v1 < v2){
            for(var n = v1;n < v2;n += p1 ){
                
                // na repetição sempre o n tambem ... tanto no incio, teste e atribuição...
               
                res.innerHTML += `${n} \u{1F6EB}`
                
                //no tamplate coloca-se o n que esta recebendo o primeiro valor...

                //para adcionar emoji, basta colocar barra invertidA, ENTRE chaves e  so o codigo numerico do emoji junto com o res...
         }
      
       }else{
           for(var n = v1; n > v2; n -= p1){
               res.innerHTML += `${n} \u{1F697}`
           }
       }
       res.innerHTML += `\u{1F6A8}`
    }//OBS: SEMPRE CONCATENANDO PARA NÃO SOBRESCREVER +=...
}
