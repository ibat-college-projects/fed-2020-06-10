
function onSelectChange(e) {
    console.log(`Select box has changed`)

    //  const obj = document.getElementById('mySelectList');

    const currentIndex = e.selectedIndex;
    console.log(`Current index is ${currentIndex}`);

    if (currentIndex > 0) {

        const currentValue = e.value;
        console.log(`Current Value is ${currentValue}`);

    }
}  // onSelectChange() 

function addItems() {

    let sel = document.querySelector('#mySelectList');

    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");

    opt1.value = "Limerick";
    opt1.text = "Limerick";

    opt2.value = "Galway";
    opt2.text = "Galway";

    sel.add(opt1,null);
    sel.add(opt2,null);


    console.log(`Add Itemes is being called`);

    let countItems = sel.options.length;

    console.log(`total items : ${countItems}`);

} // addItems() 

function clearItems() {
    let sel = document.querySelector('#mySelectList');
    sel.options.length = 0;
}