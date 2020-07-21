(function ($) {

    $.fn.paginate = function () {

        let selector = this;

        let paginateButton = $(selector).find('.pagination a');

        $(paginateButton).click(function (event) {
            event.preventDefault();
            let pageURL = $(this).attr('href');
            $.ajax({
                url: pageURL,
                success: function (response, status) {
                    if (status === 'success') {
                        selector.html(response);
                        $(selector).paginate();
                        return true;
                    }
                }
            });

        });

    };

}(jQuery));
