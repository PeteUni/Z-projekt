$(function() {
//header





//section 1
    var menu = $('.menu').find('li');

    menu.on('click', function() {
        // $(this).toggleClass('blue');
        // console.log($(this).html());
    });

    var circle = $('.circle');
    var four = $('.four');

    circle.on('click', function() {
        four.animate({
            opacity: 0.2,
            transform: scale(0.3)
            //transform: "rotate("+230+"deg)"
            // transform: scale(0.5, 0.5)
            // 'rotate(' + 180 + 'deg)'
            // ,'linear', function() {
            //     four.animate({
            //         transform: 'rotate(' + 60 + 'deg)'
        }, 1000);
        // four.css('transform', 'rotate(' + 30 + 'deg)');
        circle.toggleClass('hidden');
    });

///footer


});
