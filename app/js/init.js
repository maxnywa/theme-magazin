// Select init
$('select').styler();

//Switch product items view
$('.grid-thumbs').on('click', function (){
    //Find cards and remove class row-card
    $('.medium-card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
});


// Slick carousel init
$('.trending-carousel').slick({

    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
});

// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
});

$('.grid-list').on('click', function () {
    //Find cards and add class row-card
    $('.medium-card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
});