$(function(){
    $('.menu__btn, .menu__list a').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.menu__list a').on('click', function(){
        $('.line-1, .line-2, .line-3, .burger__btn').toggleClass('change');
        
    });
    $('.portfolio__menu-burger').on('click', function(){
        $('.portfolio__menu').toggleClass('portfolio__menu--active')
    })
        $(".footer__go, .menu__list").on("click","a", function (e) {
            //отменяем стандартную обработку нажатия по ссылке
            e.preventDefault();
    
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
    });
})
function  myFunction(x) {
    x.classList.toggle("change");
}
$('.slicker__inner').slick({
    dots: true,
    prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
})

var mixer = mixitup('.portfolio__images',{  
})