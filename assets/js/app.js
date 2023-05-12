$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav: true,  
    navText: ["<img src='../img/paper/navText.png' />", "<img src='../img/paper/navText.png' />"],  
    navClass: ['owl-prev', 'owl-next'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});