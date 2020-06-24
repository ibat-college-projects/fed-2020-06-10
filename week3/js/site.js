console.log(' js file is loaded');


function init() {
    showDate();
    setUpListeners();
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
