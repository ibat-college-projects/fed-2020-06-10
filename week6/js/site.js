$(function () {

    console.log('jquery is loaded');

    initSelect()
})

function initSelect() {


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