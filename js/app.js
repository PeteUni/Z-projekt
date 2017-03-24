$(function() {
    //header





    //section 1
    var menu = $('.menu').find('li');

    menu.on('click', function() {
        $(this).toggleClass('blue');
        // console.log($(this).html());
    });

    var circle = $('.circle');
    var four = $('.four');

    four.removeClass('puls');
    circle.on('click', function() {
        four.addClass('puls');
        // four.animate({
        //     opacity: 0.05,
        //     //transform: "rotate("+230+"deg)"
        //     // transform: scale(0.5, 0.5)
        //     // 'rotate(' + 180 + 'deg)'
        //     // ,'linear', function() {
        //     //     four.animate({
        //     //         transform: 'rotate(' + 60 + 'deg)'
        // }, 1000);
        // four.toggleClass('puls');
        // four.css('transform', 'rotate(' + 30 + 'deg)');
        circle.toggleClass('hidden');
    });

    ///footer


});
