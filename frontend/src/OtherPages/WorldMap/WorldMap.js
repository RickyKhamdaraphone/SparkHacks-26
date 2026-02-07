// worldmap.js
export default function initWorldMap() {
  document.querySelectorAll("svg path").forEach((country) => {
    country.addEventListener("click", () => {
      const countryName = country.getAttribute("class") || country.getAttribute("name");
      const moviesByCountry = {
        "United States": ["Titanic", "The Notebook", "Avengers"],
        "Japan": ["Spirited Away", "Memories of a Geisha", "Seven Samurai"],
        "France": ["Children of Paradise", "Amélie", "The Artist"],
        "India": ["3 Idiots", "Lagaan", "Mardaani"],
        "Mexico": ["Roma", "Amores Perros", "Macario"],
      };

      const movies = moviesByCountry[countryName] || ["No movies added yet"];

      document.getElementById("country-name").innerText = countryName || "Unknown country";

      const list = document.getElementById("movie-list");
      list.innerHTML = "";

      movies.forEach((movie) => {
        const li = document.createElement("li");
        li.innerText = movie;
        list.appendChild(li);
      });
    });
  });
}
