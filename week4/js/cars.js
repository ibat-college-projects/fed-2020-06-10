var mfs = ['Select an Item', 'Volkswagen', 'BMW','Nissan', 'Audi', ];


// honda, infinit, hyundai, ford, kia

function init() {
    populateSelectMF();
}

function populateSelectMF() {

    console.log('setup is being called');

    let sel = document.querySelector('#ListCarMfs');
    sel.options.length = 0;

    var firstItem = mfs.shift();
    mfs.sort();
    mfs.unshift(firstItem)

      for (var i = 0; i < mfs.length; i++) {
        let opt1 = document.createElement("option");
        opt1.value = i;
        opt1.text = mfs[i];
        sel.add(opt1, null);

      }
}

function onSelectChange(e) {

    console.log('onSelectChange is being called');
    
    const currentIndex = e.selectedIndex;
    console.log(`Current index is ${currentIndex}`);

    if (currentIndex > 0) {

        const currentMf = mfs[currentIndex];
        console.log(`CurrentMf is ${currentMf}`);

    }
}

function addCar(e) {

    let currentCar = e.value;
    mfs.push(currentCar)
    e.value = '';
    populateSelectMF()

}