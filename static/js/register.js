// nav bar js
const navbarLinks = document.getElementById("navbar-links");
const menuIcon = document.getElementById("bars");
const closeIcon = document.getElementById("close");
menuIcon.addEventListener("click", () => {
  navbarLinks.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});


// Fetch country and currency data
async function fetchCountryCurrencyData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const countryDropdown = document.getElementById("country");
        const currencyDropdown = document.getElementById("currency");
        const currencySet = new Set(); // To avoid duplicate currencies

        data.sort((a, b) => a.name.common.localeCompare(b.name.common)); // Sort countries alphabetically

        data.forEach((country) => {
            // Populate country dropdown
            const countryOption = document.createElement("option");
            countryOption.value = country.cca2; // Country code (e.g., US, NG)
            countryOption.textContent = country.name.common; // Country name
            countryDropdown.appendChild(countryOption);

            // Extract currency information
            if (country.currencies) {
                Object.values(country.currencies).forEach((currency) => {
                    const currencyName = `${currency.name} (${currency.symbol})`; // E.g., "Chinese Yuan (¥)"

                    if (!currencySet.has(currencyName)) {
                        const currencyOption = document.createElement("option");
                        currencyOption.value = currency.code; // Currency code (e.g., USD, CNY)
                        currencyOption.textContent = currencyName;
                        currencyDropdown.appendChild(currencyOption);
                        currencySet.add(currencyName);
                    }
                });
            }
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call function on page load
window.addEventListener("DOMContentLoaded", fetchCountryCurrencyData);

