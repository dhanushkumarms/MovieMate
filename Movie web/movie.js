// Function to create a movie box HTML element
function createMovieBox(movie) {
    const box = document.createElement('div');
    box.classList.add('box');

    const boxImg = document.createElement('div');
    boxImg.classList.add('box-img');

    const img = document.createElement('img');
    img.src = movie.image;
    img.alt = movie.title;

    boxImg.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = movie.title;

    const genre = document.createElement('span');
    genre.textContent = `120 min | ${movie.genre}`;

    box.appendChild(boxImg);
    box.appendChild(title);
    box.appendChild(genre);

    return box;
}

// Function to render movies on the page
function renderMovies() {
    const moviesContainer = document.getElementById('movies-container');

    // Fetch movie data from an API endpoint
    fetch('https://api.themoviedb.org/3/tv/:tv_id/season/:season_number/episode/:episode_number/rating?guest_session_id=in%20fugiat&session_id=in%20fugiat')
        .then(response => response.json())
        .then(data => {
            // Loop through the fetched movie data and create HTML elements
            data.forEach(movie => {
                const movieBox = createMovieBox(movie);
                moviesContainer.appendChild(movieBox);
            });
        })
        .catch(error => {
            console.error('Error fetching movie data:', error);
        });
}

// Call renderMovies function when the page loads
document.addEventListener('DOMContentLoaded', renderMovies);
