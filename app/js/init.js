// Select init
$('select').styler();

//Switch product items view
$('.grid-thumbs').on('click', function (){
    //Find cards and remove class row-card
    $('.medium-card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
});

// Select init
$('select, input[type="file"]').styler();

// Slick carousel init
$('.trending-carousel').slick({
    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive:[
        {
            breakpoint: 1199,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 991,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
    $('.grid-list').removeClass('active');
    $('.grid-thumbs').addClass('active');
});

$('.grid-list').on('click', function () {
    //Find cards and add class row-card
    $('.medium-card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
    $('.grid-list').addClass('active');
    $('.grid-thumbs').removeClass('active');
  });