document.querySelectorAll("svg path").forEach(country => {
    country.addEventListener("click", () => {
        const countryName = country.getAttribute("class");
        
        // Redirect to a new page (for example, country.html) with the country name as a query parameter
        if (countryName) {
            window.location.href = `country.html?name=${encodeURIComponent(countryName)}`;
        }
    });
});
