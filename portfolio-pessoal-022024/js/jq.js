$(document).ready(function () {
    /* Efeito*/
    new Typewriter('#skills', {
        strings: ['Analista de Sistemas', 'Front-end', "Back-end", "Banco de dados"],
        autoStart: true,
        loop: true
    })
    /*efeito de texto*/
    var titulo = $('.main-text-titulo');
    var tituloTrabalho = $('.titulo-trabalho');
    animationClass = 'text-animation';
    $(document).scroll(function () {
        var topo = $(document).scrollTop()
        var item = $(titulo).offset().top * 2 / 4;
        var item2 = $(tituloTrabalho).offset().top *3 /4;
        if (topo > item) {
            $(titulo).addClass(animationClass)
        }
        if (topo > item2) {
            $(tituloTrabalho).addClass(animationClass)
        }
    });
    /*tabs cursos*/
    $("#conteudo:nth-child(2)").hide()
    $("#conteudo:nth-child(3)").hide()
    $("#conteudo:nth-child(4)").hide()
    $("#content div:nth-child(1)").show();
    $(".abas li:first").addClass("selecionado");
    $(".aba").click(function () {
        $(".aba").removeClass("selecionado");
        $(this).addClass("selecionado");
        indice = $(this).index();
        indice++;         
        $(".article #conteudo").hide()
        $("#conteudo:nth-child(" + indice + ")").show();
    });
    /*lightgallery*/
    let gallery = document.querySelector('.container-trabalhos')
    lightGallery(gallery,
     {
        plugins: [lgZoom],
    })        
    $('.fa-bars').click(function(){
        $('.ul-nav-header').toggle()
    })
    $(document).click(function(e){
        if($(e.target).closest('.fa-bars').length == 0 && $(window).width() < 711){
            $('.ul-nav-header').hide()
        }
    });
})
