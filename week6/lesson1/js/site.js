var counter = 0;
$(function () {

    console.log('jquery is loaded');

    // $(target).on(event, function() {.....})
    $(".card").html(counter);
    initButtons();
    initParas();
    initCalc();


})


function initCalc() {

    $("#btnIncreaseCounter").on("click", function () {
        counter = counter +1

        $(".card").html(counter);
    });

}

function initParas() {

    // Target paragraph elements modify style based on position / order in the DOM
    $('p:first').css("font-style", 'italic');

    $('p:last').css("font-style", 'italic');

    $('p')[0].innerHTML = "<strong>Hello</strong";

    // Just use handy method html()
    $('p:last').html("I am the last paragraph");

}







function initButtons() {
    // # targets by ID
    $('#btnDemo').on('click', function () {

        console.log(`btn demo is pressed`);

        $('#pWelcome').hide();

    });


    $('#btnToggle').on('click', function () {

        $('#pWelcome').toggle();

    });


    $("#btnHidePara").on("click", function () {


        $('p:first').hide();
        $('p:last').hide();
    });

    $("#btnShowPara").on("click", function () {


        $('p:first').show();
        $('p:last').show();
    });


}

