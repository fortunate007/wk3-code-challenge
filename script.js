document.addEventListener("DOMContentLoaded", () => {
    const filmsUrl = "http://localhost:3000/films";
    const filmList = document.getElementById("films");
    const poster = document.getElementById("poster");
    const title = document.getElementById("title");
    const runtime = document.getElementById("runtime");
    const showtime = document.getElementById("showtime");
    const tickets = document.getElementById("tickets");
    const buyTicketButton = document.getElementById("buy-ticket");
    
    let currentFilm = {};

    // Fetch and display the first movie's details
    function fetchFirstFilm() {
        fetch(`${filmsUrl}/1`)
            .then(response => response.json())
            .then(data => displayFilmDetails(data));
    }

    // Fetch and display the list of all films
    function fetchFilms() {
        fetch(filmsUrl)
            .then(response => response.json())
            .then(data => {
                filmList.innerHTML = '';
                data.forEach(film => {
                    const li = document.createElement('li');
                    li.className = 'film item';
                    li.textContent = film.title;
                    li.addEventListener('click', () => displayFilmDetails(film));
                    filmList.appendChild(li);
                });
            });
    }

    // Display film details
    function displayFilmDetails(film) {
        currentFilm = film;
        poster.src = film.poster;
        title.textContent = film.title;
        runtime.textContent = film.runtime;
        showtime.textContent = film.showtime;
        tickets.textContent = film.capacity - film.tickets_sold;
        buyTicketButton.textContent = "Buy Ticket";
        if (film.capacity - film.tickets_sold === 0) {
            buyTicketButton.textContent = "Sold Out";
        }
    }

    // Handle buying a ticket
    buyTicketButton.addEventListener('click', () => {
        let availableTickets = currentFilm.capacity - currentFilm.tickets_sold;
        if (availableTickets > 0) {
            availableTickets--;
            currentFilm.tickets_sold++;
            tickets.textContent = availableTickets;
            if (availableTickets === 0) {
                buyTicketButton.textContent = "Sold Out";
            }
            updateTicketsSold(currentFilm.id, currentFilm.tickets_sold);
        } else {
            alert("Sold Out");
        }
    });

    // Update tickets sold on the server
    function updateTicketsSold(filmId, ticketsSold) {
        fetch(`${filmsUrl}/${filmId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ tickets_sold: ticketsSold })
        });
    }

    // Initial fetches
    fetchFirstFilm();
    fetchFilms();
});