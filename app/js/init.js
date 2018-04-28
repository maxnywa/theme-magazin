// Select init
$('select').styler();

// Select init
$('select, input[type="file"]').styler();
$('#upload-file-styler').styler('destroy');

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
    $('.all-items-container .medium-card').removeClass('row-card');
    $('.all-items-container .col-12').removeClass('col-xl-12');
    $('.all-items-container .col-md-4').removeClass('col-md-12');
    $('.all-items-container .col-xl-4').removeClass('col-xl-12');
    $('.grid-list').removeClass('actives');
    $('.grid-thumbs').addClass('actives');
});

$('.grid-list').on('click', function () {
    //Find cards and add class row-card
    $('.medium-card').addClass('row-card');
    $('.all-items-container .col-12').addClass('col-xl-12');
    $('.all-items-container .col-md-4').addClass('col-md-12');
    $('.all-items-container .col-xl-4').addClass('col-xl-12');
    $('.grid-list').addClass('actives');
    $('.grid-thumbs').removeClass('actives');
});