//AQUI NO JS CRIA-SE UMA FUNÇÃO VERIFICAR PARA QUE FUNCIONE O BOTÃO NO SITE... cRIA-SE VARIAVEIS PARA QUE DE CEERTO A INTERAÇÃO REFERENTE AO QUE SE TEM NO HTM
/*function verificar(){ 
    var data = new Date()//isto e: instanciando uma variavel
    var ano = data.getFullYear()//isto e: pegando o ano atual do sistema
    var fano = document.getElementById("txtano")//isto e: está pegando o formulario onde é digitado uma data e assim poder comparar e realizar a operação em que o que foi digitado no formulario vai ser subtraido pelo valor do sistema(ano)...
    var res = document.getElementById("res")//isto e: cria-se uma variavel puxando a div la do html referente a div de resultado onde foi criada esta id = res...
/////////////////////////////////////////////////////////////////////////
    //Criou-se aqui uma condição na qual, se o formulario que foi convertido para numero quando utilizamos .value, e toda a sua extensao utilizando o length for igual a 0 ou maior que o ano atual ele gerara um erro...   
    if(fano.value.length == 0 || Number(fano.value) > ano){
          window.alert("ERRO")
    }else{
        var fsex = document.getElementsByName("radsex")//cria-se uma variavel dentro da condição else essa variavel chama-se (fsex) e chama-se tambem o id do input radius.Para chamar esse input utilizamos o getelementsbyname no plural o "elements" ... Para que gere um resultado ao escolher nas opç~es o sexo...
        ////////////////////////////////////////////////////////
        var idade = ano - Number(fano.value)// cria-se uma variavel de idade que sua função é pegar o formulario(fano) digitado e subtrair pelo ano atual e assim gerando um resultado de idade ...
        /////////////////////////////////////////////////////////
        // CARATER TESTE VAMOS VER COMO FICOU: CRIA-SE UM RES.INNERHTML
//res.innerHTML=`A idade calculada é ${idade}`
        var genero = ''// cria-se uma variavel genero com string vazia para verificar o sexo...Cria-se as condições utilizando o fsex criado com o array de posição seguido da ferramenta de marcação para dizer caso o sexo escolhido tenha um resultado certo...
        ///////////////////////////////////////////////////////////////
        //Vamos criar de forma dinamica no js para inserir imagens...Cria-se uma variavel img crea-se um elemento (document.creatElement('img'))...Depois abaixo digite img.setAttribute ('id', 'foto')entao cria-se um atributo para img que é um id para foto...
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = "HOMEM"
            if(idade>= 0 && idade < 11){
                //Criança
                img.setAttribute('src', 'fotocriancamenino.png')
            }else if(idade >= 11 && idade <18){
                //Adolescente
                img.setAttribute('src', 'fotoadolescente-H.png')
            }else if(idade >= 18 && idade <30){
                //jovem rapaz
                img.setAttribute('src', 'fotojovemrapaz.png')
            }else if(idade >= 30 && idade < 50){
                //Homem cascudo
                img.setAttribute('src', 'fotohomem.png')
            }else{
                //Idoso
                img.setAttribute('src', 'fotoidoso.png')
            }
        }else if(fsex[1].checked){
            genero = "MULHER"
            if(idade >= 0 && idade < 11){
                //Criança
                img.setAttribute('src', 'fotocriancamenina.png')
            }else if(idade >= 11 && idade < 18){
                //Adolescente
                img.setAttribute('src', 'fotoadolescente-M.png')
            }else if(idade >= 18 && idade < 30){
                //Jovem mulher
                img.setAttribute('src', 'fotojovemmulher.png')
            }else if(idade >= 30 && idade <50){
                //Mulher cascuda
            }else{
                //idosa
                img.setAttribute('src', 'foto')
            }
        }// cria-se a res innerhtml para gerar o resuldado do genero junto a idade ...
        //res.style.texAalign = center ... centralizando texto atraves do js;
        res.innerHTML= `Verificamos ${genero} com idade ${idade} de anos!`
        //Para que apareça a foto precimos criar um res.appenChild e atribuit img para que atribua a mesma...
        res.appendChild(img)// desta forma tem como atribuir a foto...
    }
}*/