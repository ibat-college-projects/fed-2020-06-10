$(function () {

    console.log('jquery is loaded');


    hideToppings();
    initToppingChoice();
    initMeatSelect();
    initVegSelect();
    initPizzaRequest();
    initButtonsAndOrder();
})


function initButtonsAndOrder() {
    $("#btnSubmitPizzaRequest").hide();
    $("#messagePanel").hide();

}

function displayOrderButton() {

    $("#btnSubmitPizzaRequest").hide();
    $("#messagePanel").hide();

   const meatCount =  $("input[name='meat']:checked").length;
   const VegCount = $("input[name='Vegetarian']:checked").length;

   if (meatCount > 0 || VegCount > 0)  $("#btnSubmitPizzaRequest").show();

}

function initPizzaRequest() {

    $("#btnSubmitPizzaRequest").on("click", function () { 

        var meatChoice = [];
        var vegChoice = [];

        $.each($("input[name='meat']:checked"), function () {

            meatChoice.push($(this).val());
        })

        $.each($("input[name='Vegetarian']:checked"), function () {

            vegChoice.push($(this).val());
        })


        // Merge arrays using concat
        var pizzaToppings = meatChoice.concat(vegChoice);

        $('#messagePanel').html(pizzaToppings.sort().reverse().join())


        $("#messagePanel").show();

        console.log(`You have chosen to order`);

    })

}

function initToppingChoice() {

    $("input[name='toppingChoice']").on('click',function () {
        var choice = $(this).val();

        console.log(`You have chosen ${choice}`);
        showPizzaToppingChoice(choice);
    });
}

function showPizzaToppingChoice(choice) {

    $('#listOfMeatToppings').hide();
    $('#listOfVegToppings').hide();

    switch (choice) {
        case 'meat':
            $('#listOfMeatToppings').show();
            break;
        case 'vegetarian':
            $('#listOfVegToppings').show();
            break;
        case 'both':
            $('#listOfMeatToppings').show();
            $('#listOfVegToppings').show();
            break;
        default: break;

    }
}


function hideToppings() {

    $('#listOfMeatToppings').hide();
    $('#listOfVegToppings').hide();
}

function initMeatSelect() {


    $('#SelectAllMeat').on('click', function () {
        // console.log(`select all `);

        const currentState = $(this).prop('checked');
        $('.meat').prop('checked', currentState)

        displayOrderButton();
    })


    $('.meat').on('click', function () {

        // const currentStateAll = $('#SelectAllMeat').prop('checked');
        const currentState = $(this).prop('checked');

        if (!currentState) {

            $('#SelectAllMeat').prop('checked', false);
        } else {

            const countMeatsNotSelected = $("input[name='meat']:not(':checked')").length;

            console.log(`Items not checked = ${countMeatsNotSelected}`)


            if (countMeatsNotSelected == 0) {
                $('#SelectAllMeat').prop('checked', true);
            }
        }

        displayOrderButton();
   

    })



}

function initVegSelect() {


    $('#SelectAllVegetarian').on('click', function () {
        // console.log(`select all `);

        const currentState = $(this).prop('checked');
        $('.Vegetarian').prop('checked', currentState)


        displayOrderButton();
    })


    $('.Vegetarian').on('click', function () {

        // const currentStateAll = $('#SelectAllMeat').prop('checked');
        const currentState = $(this).prop('checked');

        if (!currentState) {

            $('#SelectAllVegetarian').prop('checked', false);
        } else {

            const countVegNotSelected = $("input[name='Vegetarian']:not(':checked')").length;

            console.log(`Items not checked = ${countVegNotSelected}`)


            if (countVegNotSelected == 0) {
                $('#SelectAllVegetarian').prop('checked', true);
            }
        }

        displayOrderButton();

    })



}