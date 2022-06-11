function carregar(){//cria-se uma função carregar e chamamos os elementos...
    // abaixo chama-se os identificadores das tags a serem carregadas...
    var msg = document.getElementById('msg')
    var img = document.getElementById("imagem")
    // para que esse carregamento aconteça precisamos pegar a data e hora do sistema para que calcule em cima da mesma ...
    var data = new Date()
    //var hora = data.getHours()
    hora = 22
    // no aqui vai aparecer um msg criaremos entre crases uma outra msg que vai aparecer no lugar com um template string...
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 00 && hora < 12){
        // BOM DIA
        img.src = "fotomanha.png"//ja temos a variavel img entaõ e só chamar a mesma seguido do 'src' uma ferramenta que pega o arquivo utilizando o nome de origem do mesmo...
        document.body.style.background = "#feebc8"
    }else if(hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = "fototarde.png"
        // para cor de fundo fazemos o seguinte... pegamos na imagem o codigo da cor escolhida e jogaremos da seguinte forma aqui:
        document.body.style.background = "#3da0b2"
    }else{
        //BOA NOITE
        img.src = "fotonoite.png"
        document.body.style.background = "#2d2d65"
    }
}