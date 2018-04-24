(function ($) {
    $(window).on('load', function () {
        var projectList = $('.tags');
        var projectListActiveElement = projectList.find('.active');
        var mobileProjectList = '<div class="mobile-list-wrap">' +
            '<div class="mobile-list">' +
            '<div class="current">' +
            '<span class="current-text">' + projectListActiveElement.text() + '</span>' +
            '<span class="dropdown__toggle">' +
            '<i class="fa fa-close"></i>' +
            '<i class="fa fa-chevron-down"></i>' +
            '</span>' +
            '</div>' +
            '<div class="dropdown-list">' +
            '<ul>' +
            projectList.html() +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>';

        projectList.after(mobileProjectList);

        var clickOnCurent = $('.current');
        var currentText = $('.current-text');
        var dropdownList = $('.dropdown-list');

        clickOnCurent.on('click', function () {
            $(this).toggleClass('selected');
            dropdownList.slideToggle();
        });

        var dropdownListElement = $('.dropdown-list li');

        dropdownListElement.on('click', function () {
            dropdownListElement.each(function (i, value) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
            });
            $(this).addClass('active');
            clickOnCurent.toggleClass('selected');
            currentText.text($(this).text());
            dropdownList.slideUp();
            return false;
        });
    })
})(jQuery);