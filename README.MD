# Flatdango

Flatdango is a web application that allows users to purchase movie tickets from Flatiron Movie Theater.

## Features
- See the first movie's details including poster, title, runtime, showtime, and available tickets on page load.
- See a list of all movies on the left side of the page.
- Buy a ticket for a movie and see the number of available tickets decrease on the frontend.
- Indicates when a movie is sold out.

## Setup Instructions
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install -g json-server` to install JSON Server.
4. Create a `db.json` file with the provided movie data.
5. Run `json-server --watch db.json` to start the server.
6. Open `index.html` in your browser to view the application.

## How to Use
- The first movie's details are displayed when the page loads.
- Click on a movie title in the sidebar to view its details.
- Click the "Buy Ticket" button to purchase a ticket. The number of available tickets will decrease.
- If the movie is sold out, the button will display "Sold Out".

## Additional Notes
- No persistence is needed for buying tickets, but the backend update feature is implemented as an extra bonus.
- Ensure the JSON server is running to fetch data correctly.
