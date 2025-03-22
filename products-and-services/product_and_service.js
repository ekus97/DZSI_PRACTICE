(function ($) {
    $(document).ready(function () {
        function handleSlick() {
            if ($(window).width() < 1024) {
                // Initialize slick if not already initialized
                if (!$('.slider-wrap').hasClass('slick-initialized')) {
                    $('.slider-wrap').slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                        infinite: false,
                        responsive: [
                            {
                                breakpoint: 595,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }
                        ]
                    });
                }
            } else {
                // Unslick if already initialized
                if ($('.slider-wrap').hasClass('slick-initialized')) {
                    $('.slider-wrap').slick('unslick'); // Destroy the Slick slider
                }
            }
        }

        // Initial check
        handleSlick();

        // Check on window resize
        $(window).resize(function () {
            handleSlick();
        });
    });
})(jQuery); // End jQuery