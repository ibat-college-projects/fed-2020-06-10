console.log(' js file is loaded');


function init() {
    showDate();
    setUpListeners();


    const article = document.querySelector('#electric-cars');
 
    console.log(`Columns: ${article.dataset.columns}`) // "3"
    console.log(`Index Number:${article.dataset.indexNumber}`) // "12314"
    console.log(`Parent: ${article.dataset.parent}`) // "cars"




}

function setUpListeners() {

   var seating = document.querySelectorAll('.seat');

   seating.forEach(seat => {
       seat.addEventListener('click',seatClick)
       

    });
   

}


function seatClick(e) {
    console.log('Seat click')
    

 }

function showDate() {
    let d = new Date();

    const shortDate = d.toDateString();

   
    var dateSpan = document.getElementById('currentDate');

    dateSpan.innerHTML = `${shortDate}`;


 

}
