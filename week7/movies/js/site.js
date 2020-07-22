$(function () {

    const message = `jquery is loaded`;
    console.log(message)

    $('#messagePanel').html(message)
    sendMessage(message);

    setup();

})

function setup() {

    $('#btnLoadMovies').on('click', function () {
        sendMessage(`button  is clicked`);

        $.getJSON('https://college-movies.herokuapp.com/', function (movieData) {
            renderMovieData(movieData);
        });


    });
}


function renderMovieData(movieData) {
    // console.log(movieData);

    /*
    for (i = 0; i < movieData.length; i++) {

        console.log(movieData[i]);
        movie = movieData[i];
        title = movieData[i].title;
        id = movieData[i].id;
        year = movieData[i].year;
        director = movieData[i].director;
    }
    */
    htmlString = [];
    for (const movie of movieData) {
        // console.log(movie);

        // object destructuring && spread operator
        const { title, year, director, id, cast, ...rest } = movie;

        console.log(`${id} : ${title}: ${year} : ${director}`)
        console.log(rest)
        htmlString.push(`<p>${title}</p>`); 

         castMembers = cast.split(",");
         console.log(castMembers);

         htmlString.push(`<ol>`);
         for(const member of castMembers) {
            htmlString.push(`<li>Cast: ${member}</li>`)
        }

         htmlString.push(`</ol>`);


    }

    $('#messagePanel').html(htmlString.join(' '));




}

function sendMessage(message) {

    $('#messagePanel').html(message)

}