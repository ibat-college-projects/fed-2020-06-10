function init() {

    console.log(`I am function init()`);

    startStorageDemo();

    loadStorageItem();
}

function startStorageDemo() {
    // Set a key (today) to have the value 'Wednesday'
    localStorage.setItem("today","Wednesday");
}

function loadStorageItem() {

    const myDay = localStorage.getItem("today");

    console.log(`Myday is ${myDay}`);

}
function btnSave() {

    const flavour =  document.getElementById("tbFlavour").value;
    console.log(`I saving ${flavour}`);


    localStorage.setItem("flavour", flavour);
 }

 function btnRetrieve() {
    console.log(`I retrieving`);
    const flavour = localStorage.getItem("flavour");
    console.log(`flavour is ${flavour}`);
   
    document.getElementById("messagePanel").innerHTML = flavour;
   
   }
 

