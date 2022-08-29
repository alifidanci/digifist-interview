$(document).ready(function () {
    /* Product Color Change */
    $('.product-colors').on('click', '.color', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    /* Slider */
    const leftButton = $('.direction-button.left');
    const rightButton = $('.direction-button.right');
    const productCard = $('.product-card');
    const productContainer = $('.products');
    const productContainerGap = parseInt(productContainer.css('gap')) ?? 30;

    rightButton.on('click', false, function () {
        let nextScrollPosition = productContainer.scrollLeft() + (productCard.width() + productContainerGap);
        productContainer.animate({scrollLeft: nextScrollPosition});
    });
    leftButton.on('click', false, function () {
        let nextScrollPosition = productContainer.scrollLeft() - (productCard.width() + productContainerGap);
        productContainer.animate({scrollLeft: nextScrollPosition});
    });
});