const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const TMDB_KEY = '83dad93e1e9e05d8c32140d4a7b3a192'; // MUST be in quotes!

// === Example: one upcoming actor per country ===
const upcomingActors = {
    USA: 'Timothée Chalamet',
    Japan: 'Ryo Narita',
    France: 'Félix Lefebvre',
    India: 'Radhika Madan'
};

// === Test endpoint to check if server is running ===
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

// === Endpoint to get actor + one movie per country ===
app.get('/api/actor/:country', async (req, res) => {
    const country = req.params.country;
    const actorName = upcomingActors[country];

    if (!actorName) {
        return res.status(404).json({ error: 'No actor found for this country' });
    }

    try {
        // Search for the actor on TMDb
        const searchRes = await axios.get('https://api.themoviedb.org/3/search/person', {
            params: { api_key: TMDB_KEY, query: actorName }
        });

        if (!searchRes.data.results.length) {
            return res.status(404).json({ error: 'Actor not found in TMDb' });
        }

        const actor = searchRes.data.results[0];

        // Get actor's movie credits
        const creditsRes = await axios.get(`https://api.themoviedb.org/3/person/${actor.id}/movie_credits`, {
            params: { api_key: TMDB_KEY }
        });

        const movie = creditsRes.data.cast.length ? creditsRes.data.cast[0].title : 'No movie found';

        res.json({
            country,
            actor: actor.name,
            known_for: movie
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong with TMDb API request' });
    }
});

// === Start server ===
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
