$(function () {

    console.log('jquery is loaded');


    hideToppings();
    initToppingChoice();
    initMeatSelect()
    initVegSelect()
})

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



    })



}

function initVegSelect() {


    $('#SelectAllVegetarian').on('click', function () {
        // console.log(`select all `);

        const currentState = $(this).prop('checked');
        $('.Vegetarian').prop('checked', currentState)


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



    })



}