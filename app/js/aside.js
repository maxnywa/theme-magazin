let asideBtn = $('.mobile-aside-toggle');
let main = $('#main');
let overlay = $('.overlay');
let body = $('body');

asideBtn.on('click', function(e) {
    main.toggleClass('show-aside');
    body.toggleClass('overflow');
});

overlay.on('click', function(e) {
    main.toggleClass('show-aside');
    body.toggleClass('overflow');
});
