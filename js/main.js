// $('.section').css('height', window.innerHeight-60);

    /////КНОПКА "В НАЧАЛО"////

$('.up').hide();

$('.up').removeClass('default');
$(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
        $('.up').show();
        $('.up').addClass('default');
    }else{
        $('.up').hide();
        $('.up').removeClass('default');
    };
})

$('.up').on('click', function() {
    $('body').animate({scrollTop: 0}, 500);
})

/////ФИКСИРОВАННЫЙ NAV/////

// $('.nav').removeClass('default');
// $(window).scroll(function() {
//  if ($(this).scrollTop()>1) {
//      $('.nav').addClass('default').fadeIn('fast');
//  }else{
//      $('.nav').removeClass('default').fadeIn('fast');
//  };
// })

////ЯКОРЯ////

$('a[href^="#"]').click(function() {
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top-60;
        $('body').animate({scrollTop: destination}, 500);
});

/////ГАЛЕРЕЯ/////

var animTime = 900,
    oldDiv = null,
    modal = $('#modalDiv');

$('.someDiv').on('click', function (e) {
    if(oldDiv){
        oldDiv.css('opacity', 1);
    };

    var jthis = $(this);
    modal.css({ 'top': jthis.offset().top,
                'left': jthis.offset().left,
                'width': jthis.width(),
                'height': jthis.height(),
                'opacity': 1,
                'display': 'block',
                'background': jthis.css('background')
    });

    jthis.css('opacity', 0);

    modal
        .animate({'height': 400, 'width': 400},{
            duration: 1000,
            queue: false,
            specialEasing: {
                height: 'swing',
                width: 'swing'
            }
        })
        .animate({'top': $(window).scrollTop()+($(window).height()-600)/2,
                  'left': ($(window).width()-400)/2},{
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                        height: 'swing',
                        width: 'swing'
            }
        });
    oldDiv = jthis;
})

modal.on('click', function () {
    if(oldDiv){
        oldDiv.css('opacity', 1);
    };
    $(this).fadeOut(animTime);
    modal
        .animate({'height': 150, 'width': 150},{
            duration: 1000,
            queue: false,
            specialEasing: {
                height: 'swing',
                width: 'swing'
            }
        })
         .animate({'top': oldDiv.offset().top,
                   'left': oldDiv.offset().left},{
                    duration: 1000,
                    queue: false,
                    specialEasing: {
                        height: 'swing',
                        width: 'swing'
                    }
        });
});

/////BLOG////

$('.extend').hide();
$('.text').click(function () {
    $(this).parent().children('.extend').slideToggle();
})