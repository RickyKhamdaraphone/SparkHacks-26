const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Allow the frontend to connect
app.use(cors());

// --- YOUR HARDCODED DATA ---
// Keys must match exactly what your map sends (usually English names)
const movieDatabase = {
    "United States of America": { title: "The Godfather", year: 1972, poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" },
    "France": { title: "Amélie", year: 2001, poster: "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZGQtYjg3ZWU2ZDJlZmJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
    "South Korea": { title: "Parasite", year: 2019, poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg" },
    "India": { title: "3 Idiots", year: 2009, poster: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
    "Brazil": { title: "City of God", year: 2002, poster: "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LThiZTktY2DRNzDDZmNmZmWmXkEyXkFqcGdeQXVyIzQ2OTg2NzQ@._V1_.jpg" },
    "Japan": { title: "Spirited Away", year: 2001, poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZTY5YWQ0NTY1OTRiXkEyXkFqcGdeQXVyIME2NTMxNw@@._V1_.jpg" }
};

// --- THE ENDPOINT ---
app.get('/api/movie/:country', (req, res) => {
    const country = req.params.country;
    console.log("Frontend asked for:", country);

    const movie = movieDatabase[country];

    if (movie) {
        res.json({ found: true, country: country, movie: movie });
    } else {
        // Fallback for countries not in your list
        res.json({ 
            found: false, 
            country: country,
            movie: { title: "Inception", year: 2010, poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg" } 
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend is running! Go to http://localhost:${PORT}`);
});