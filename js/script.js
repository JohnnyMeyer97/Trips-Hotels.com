$(function(){
  
    //abre e fecha menu 
    $('.nav-toggle, .nav-close').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active'); /* SE TIVER ATIVO IRÁ DESATIVA, SE TIVER DESATIVADO IRÁ ATIVAR */
    });
    
    //fixar header
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.bg-black').addClass('fixed');
        }else{
            $('.bg-black').removeClass('fixed');
        }
    });
});
