$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});


// for 1st carousel 
$('.owl-carousel').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    smartSpeed: 500,
});
// for 1st carousel 

// for counter................ 
$('.counter').counterUp({
    delay: 10,
    time: 2000,
});
// for counter................ 

// Script For Slide Scroller......... 
$('#cont1').ScrollSubMenu({

    // jQuery Object | string
    menuTarget: null,

    // String [top|middle|bottom] | Number
    lineActive: 'middle',

    // String [top|middle|bottom] | Number
    deltaSectionEnd: 'middle',

    // default CSS classes & attributes
    subSelector: 'ssm-section',
    animWhileClass: 'ssm-radar',
    activeClass: 'ssm-sub-active',
    pillsActiveClass: 'ssm-pills-active',
    wrapperAttrs: {
        class: 'ssm-sub-menu'
    },
    elementAttrs: {
        class: 'ssm-elmt'
    },
    pillsAttrs: {
        class: 'ssm-pills ssm-cn'
    },
    navPillsAttrs: {
        class: 'ssm-nav-pills'
    },
    wrapperCSS: {},
    elementCSS: {},
    pillsCSS: {},
    navPillsCSS: {},

    // number
    animWhileDelay: 100,
    animWhileEnd: 1000,

    // callback events
    animExitFn: null,
    animEnterFn: null,
    animWhileFn: null,
    clickHandlerFn: null,
    elementCreateCallback: null,
    scrollStepCallback: null,

    // options of smooth scroll
    scrollSpeed: 200,
    scrollEasing: 'swing',

});
// Script For Slide Scroller......... 


// Script For Water ripples.. 
$('.demo').ripples({

    // Image Url
    imageUrl: null,

    // The width and height of the WebGL texture to render to. 
    // The larger this value, the smoother the rendering and the slower the ripples will propagate.
    resolution: 256,

    // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
    dropRadius: 20,

    // Basically the amount of refraction caused by a ripple. 
    // 0 means there is no refraction.
    perturbance: 0.00,

    // Whether mouse clicks and mouse movement triggers the effect.
    interactive: true,

    // The crossOrigin attribute to use for the affected image. 
    crossOrigin: ''

});




//   JS For Swiper.........
var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    spaceBetween: 30,
    slidesPerView: 2,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


// JS For Animsition................ 
$(document).ready(function() {
    $(".animsition").animsition({
        inClass: 'fade-in-down',
        outClass: 'fade-out-down',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) { window.location.href = url; }
    });
});