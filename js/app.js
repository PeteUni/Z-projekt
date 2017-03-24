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

    var sectionA = $('.authors')

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
        // var head = $('header');
        var section = $('.index');
        var $keyTable = $("<div class='show'><div class='sh1'><p>1</p></div><div class='sh2'><p>2</p></div><div class='sh3'><p>3</p></div><div class='sh4'><p>4</p></div><div class='sh5'><p>5</p></div><div class='sh6'><p>6</p></div><div class='sh7'><p>7</p></div><div class='sh8'><p>8</p></div><div class='sh9'><p>9</p></div></div>");
        var $tableNr = $("<div class='numb'></div>");
        section.append($keyTable);
        $keyTable.append($tableNr);
        var buttons = $('.show').children();
        console.log(buttons);

        //


        buttons.on('click', function() {
            var html = $(this).find('p').html();
            console.log(html);
            // $tableNr.html(html);
            var liNext = $('<p>');
            liNext.text(html);
            $tableNr.append(liNext);

        });
        // var input = $tableNr.html();
        // console.log(input);

        //var html = liNext;
        var tab2 = [2, 6, 3, 9];
        var tab1 = [];
        for (var i = 0; i <= tab2.length; i++) {
            console.log(tab1);
        }
    });

var order1 = $('.box1');
var order2 = $('.box2');
var order3 = $('.box3');
var orederMain = $('.order');

order1.on('click', function(){
  var $tableOrd = $("<div class='ord'><p>Order:</p></div>");
  orederMain.append($tableOrd);
});


    // var buttons = $('.show').children();
    // console.log(buttons);
    //   buttons.on('click', function(){
    //   // var p = buttons.find('p').html();
    //   console.log('dziala');
    // });
    //   console.log('dziala');
});
