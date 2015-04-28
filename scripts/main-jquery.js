$(document).ready(function() {

    // Switch between grid & list view (same content, just apply different styles)
    $('.main--filter--display').on('click', '.js-display', function(ev){
        ev.preventDefault();

        $('.js-display').removeClass('active');
        $(this).addClass('active');

        $(this).closest('.application--main').find('.js-reports').removeClass('display-grid display-list').addClass($(this).attr('id'));
    });

    // 'Number of reports displayed' below is strictly for demonstration purposes
    $('.js-display-number').on('click', function(ev) {
        $('.js-number-options').slideToggle();

        $(ev.target).closest('.js-display-number').toggleClass('active');
    });

    // 'Report type selection' below is strictly for demonstration purposes
    $('.js-report-type').on('click', function(ev) {
        var $target = $(ev.target);

        if ($target.hasClass('js-type-options-item')) {
            $target.closest('.js-report-type').find('.selected-type').text($target.text());
            //$('#js-report-type-title').text($target.text());

            $('#page_1').trigger('click');
        }

        $('.js-type-options').slideToggle();
    });

    //Add tooltips
    $('.js-tooltip').tooltip();

    $('#faq-video').on('hidden.bs.modal', function () {
        var videoElement = document.getElementById('faq-video-element');
        videoElement.pause();
    });

    //$('#dropzone_ks').dropzone({url: "Submit.aspx"});
});
