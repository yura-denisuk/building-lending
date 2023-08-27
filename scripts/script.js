'use strict'

$(document).ready(() => {

    new WOW({
        animateClass: 'animate__animated',
    }).init();


    let headerMenuItem = $('.header__menu-item');
    let headerMenuLink = $('.header__menu-link');
    let headerMenuSpan = $('.header__menu-span');
    let headerMenuCloseSVG = $('.header__menu-close-svg');
    let headerBurger = $('.header__burger');
    let headerMenu = $('.header__menu');
    let projectButtonInfoBtn = $('.project__button-info-btn');
    let projectItem = $('.project__item');



    // Изменение положения картинки в блоке с проектами (нечетная - картинка первая; четная - картинка вторая)

    let projectItemOdd = $('.project__item:odd')

    projectItemOdd.css('flex-direction', 'row-reverse');

    for (let i = 3; i < projectItem.length + 1; i++) {
        $('.project__item:nth-child(' + i + ')').hide();
    }

    $(window).on('resize', function() {
        if ($(window).width() < 1144) {
            projectItemOdd.css('flex-direction', 'column');
        } else {
            projectItemOdd.css('flex-direction', 'row-reverse');
        }
    });

    // Добавление видимости 3 следующих проектов при нажатии на кнопку "показать еще"

    let a = 1;
    $('.project__next').click(function () {
        if (a % 2 !== 0) {
            for (let i = 3; i < projectItem.length + 1; i++) {
                $('.project__item:nth-child(' + i + ')').fadeIn();
            }
        } else {
            for (let i = 3; i < projectItem.length + 1; i++) {
                $('.project__item:nth-child(' + i + ')').fadeOut();
            }
        }
        a++;
    })

    // Работа меню-бургер

    headerBurger.click(function () {
        headerMenu.fadeIn();
    })

    headerMenuCloseSVG.click(function () {
        headerMenu.fadeOut();
    })
    // Изменение стилей активной строки в меню
    let scrollHtmlBody = $("html, body");

    for (let i = 0; i < headerMenuItem.length; i++) {
        headerMenuItem.eq(i).click(function () {
            headerMenuSpan.css('display', 'none');
            headerMenuLink.css('color', '#ffffff');
            headerMenuSpan.eq(i).css('display', 'inline-block');
            headerMenuLink.eq(i).css('color', '#ecc66b');
            headerMenu.fadeOut();
            switch (i) {
                case 0:
                    scrollHtmlBody.animate({
                        scrollTop: $(".project").offset().top
                    }, 1000);
                    break;

                case 1:
                    scrollHtmlBody.animate({
                        scrollTop: $(".technology").offset().top
                    }, 1000);
                    break;
                case 2:
                    scrollHtmlBody.animate({
                        scrollTop: $(".product").offset().top
                    }, 1000);
                    break;

                case 3:
                    scrollHtmlBody.animate({
                        scrollTop: $(".steps").offset().top
                    }, 1000);
                    break;
                case 4:
                    scrollHtmlBody.animate({
                        scrollTop: $(".guarantees").offset().top
                    }, 1000);
                    break;
                case 5:
                    scrollHtmlBody.animate({
                        scrollTop: $(".order").offset().top
                    }, 1000);
                    break;
            }
        })
    }





    // Добавление popup на картинки

    $('.open-popup-link').magnificPopup({
        type: 'image',
    });

    // Загрузка проекта в PDF

    projectButtonInfoBtn.click(function (e) {
        e.preventDefault();
        window.location.href = '../file/project.pdf';
    })

    // Описание слайдера

    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchMove: true,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

// Установка галочки на checkbox в подписи о согласии.

    let checkbox = $('.custom_checkbox input[type="checkbox"]');

    checkbox.click(function () {
        $(this).parent().toggleClass('active');
    })

// Анимация точек на доме на адаптивной верстке

    let technologyDescriptionImage = $('.technology__description-image');
    technologyDescriptionImage.on('click', function () {
        let point = $(this);
        point.prop('point-active', true);
        technologyDescriptionImage.each(function () {
            let currentPoint = $(this);
            if (currentPoint.prop('point-active')) {
                currentPoint.prev().fadeIn();
            } else {
                currentPoint.prev().fadeOut();
            }
        })
        point.prop('point-active', false);
    })

    technologyDescriptionImage.on('blur', function () {
        technologyDescriptionImage.each(function () {
            $(this).prev().fadeOut();
        })
    })




    // При нажатии на кнопки «Заказать звонок», «Узнать подробнее», «Получить консультацию» страница должна прокручиваться
    // к блоку «Получите индивидуальную консультацию»

    let bellText = $('.bell-text');
    let sloganInfoBtn = $('.slogan__info-btn');
    let projectButtonActionBtn = $('.project__button-action-btn');

    function scrollToOrderBlock() {
        scrollHtmlBody.animate({
            scrollTop: $(".order").offset().top
        }, 1000);
    }

    sloganInfoBtn.click(function () {
        scrollToOrderBlock();
    });

    for (let i = 0; i < bellText.length; i++) {
        bellText.eq(i).click(function () {
            scrollToOrderBlock()
        })
    }

    for (let i = 0; i < projectButtonActionBtn.length; i++) {
        projectButtonActionBtn.eq(i).click(function () {
            scrollToOrderBlock()
        })
    }

//	При клике на кнопку «Записаться» в блоке «Запишитесь на экскурсию» должен появляться pop-up, расположенный на
// отдельном скрытом слое в макете.

    let excursionBtn = $('.excursion__btn');
    let popup = $('.popup');

    excursionBtn.click(function () {
        popup.fadeIn();
    })

    $('.popup__closed-svg').click(function () {
        popup.fadeOut();
    })

//Валидация формы сайта

    let orderButton = $('.order__button');
    let popupButton = $('.popup__button');
    let inputOne = $('.input_one');
    let inputTwo = $('.input_two');
    let errorName = $('.errorName');
    let errorPhone = $('.errorPhone');
    let loader = $('.loader');
    let orderClose = $('.order__close');
    let popupClose = $('.popup__close');
    let orderSuccess = $('.order__success');
    let popupSuccess = $('.popup__success');

    inputTwo.mask('(000) 000-00-00');

    // 2 usages

    function checkInputForm(i) {
        let hasError = false

        if (!inputOne.eq(i).val()) {
            errorName.eq(i).text('Необходимо ввести имя!').css('color', 'red');
            errorName.eq(i).css('margin-bottom', '20px');
            inputOne.eq(i).css('border-color', 'red');
            hasError = true;
        } else {
            errorName.eq(i).text('');
            inputOne.eq(i).css('border-color', '#ffffff');
        }

        if (!inputTwo.eq(i).val()) {
            errorPhone.eq(i).text('Необходимо ввести номер телефона!').css('color', 'red');
            errorPhone.eq(i).css('margin-bottom', '20px');
            inputTwo.eq(i).css('border-color', 'red');
            hasError = true;
        } else {
            errorPhone.eq(i).text('');
            inputTwo.eq(i).css('border-color', '#ffffff');
        }

        if (!checkbox[i].checked) {
            checkbox.eq(i).parent().css('border-color', 'red');
            hasError = true;
        } else {
            checkbox.eq(i).parent().css('border-color', '');
        }

        return hasError
    }

    orderButton.click(function () {
        let hasError = checkInputForm(0);

        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: inputOne.eq(0).val(), phone: inputTwo.eq(0).val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success === 1) {
                        orderClose.hide();
                        orderSuccess.show();
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                    }
                });
        }
    })

    popupButton.click(function () {
        let hasError = checkInputForm(1);

        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: inputOne.eq(1).val(), phone: inputTwo.eq(1).val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success === 1) {
                        popupClose.hide();
                        popupSuccess.show();
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                    }
                });
        }
    })


})