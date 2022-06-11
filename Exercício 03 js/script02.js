function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 && Number(fano.value) > ano){
        window.alert("[ERROR]...Verifique os dados e digite novamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }if(fsex[0].checked){
        genero = 'HOMEM'
        if(idade >=0 && idade < 13){
            //CRIANÇA
            img.setAttribute('src', 'fotocriancamenino.png')
        }else if(idade >=13 && idade < 17){
            //ADOLESCENTE
            img.setAttribute('src', 'fotoadolescente-H.png')
        }else if(idade >= 17 && idade < 30){
            //JOVEM 
            img.setAttribute('src', 'fotojovemrapaz.png')
        }else if(idade >=30 && idade <50 ){
            //HOMEM
            img.setAttribute('src', 'fotohomem.png')
        }else{
            //IDOSO
            img.setAttribute('src', 'fotoidoso.png')
        }
    }else if(fsex[1].checked){
        genero ='MULHER'
        if(idade >=0 && idade < 13){
            //CRIANCA
            img.setAttribute('src', 'fotocriancamenina.png')
        }else if(idade >= 13 && idade < 17){
            //ADOLESCENTE
            img.setAttribute('src', 'fotoadolescente-M.png')
        }else if(idade >= 17 && idade< 30){
            //JOVEM
            img.setAttribute('src', 'fotojovemmulher.png')
        }else if(idade >= 30 && idade< 50){
            //MULHER
            img.setAttribute('src', 'fotoMulher.png')
        }else{
            //IDOSA
            img.setAttribute('src', 'fotoidosa.png')
        }
    }
        res.innerHTML= `Verificamos o sexo ${genero} e a idade ${idade} anos!`
    res.appendChild(img)
}