// Search Bar....
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");

import suggestions from '../js/suggestions.js'; // Make sure the path to your suggestions file is correct

inputBox.addEventListener("input", (e) => {
    let userData = e.target.value.toLowerCase();
    let emptyArray = [];

    if (userData.trim() !== "") {
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().includes(userData);
        });

        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`;
        });

        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
    } else {
        searchWrapper.classList.remove("active");
        suggBox.innerHTML = "";
    }
});

icon.addEventListener("click", () => {
    const userInput = inputBox.value.toLowerCase();
    if (userInput.trim() !== "") {
        select(userInput);
    }
});

// ... (previous code)

// ... (previous code)

function select(elementText) {
    inputBox.value = elementText;
    searchWrapper.classList.remove("active");

    // Show only the relevant cards that match the input
    const userInput = elementText.toLowerCase();
    showMatchingCards(userInput);

    // Scroll to the first matching card
    const firstMatchingCard = document.querySelector(".notecard[style='display: block;']");
    if (firstMatchingCard) {
        firstMatchingCard.scrollIntoView({ behavior: "smooth" , block: "center"});
    }
}

// Add this event listener to handle clicks on the suggested keywords
suggBox.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const selectedKeyword = e.target.textContent;
        select(selectedKeyword);
    }
});

// Add an event listener to the input box to handle Enter key press
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const userInput = inputBox.value.toLowerCase();
        if (userInput.trim() !== "") {
            select(userInput);
        }
    }
});


function showMatchingCards(userInput) {
    const subjectCards = document.querySelectorAll("#importantNotesCards .notecard");

    const searchTerms = userInput.toLowerCase().split(" ");

    subjectCards.forEach((card) => {
        const cardContent = card.textContent.toLowerCase();
        const cardId = cardContent.replace(/[^a-zA-Z0-9]/g, '');
        card.id = cardId;

        // Check if all search terms are present in the card content
        const isMatching = searchTerms.every((term) => cardContent.includes(term));

        if (isMatching) {
            card.style.display = "block";
            card.scrollIntoView({ behavior: "smooth" });
        } else {
            card.style.display = "none";
        }
    });

    const searchNotFound = document.querySelector(".search-not-found");

    const matchingCards = document.querySelectorAll("#importantNotesCards .notecard[style='display: block;']");
    if (matchingCards.length === 0) {
        searchNotFound.style.display = "block";
    } else {
        searchNotFound.style.display = "none";
    }
}
function showSuggestions(list) {
    let listData = list.length ? list.join('') : "<li>No suggestions found</li>";
    suggBox.innerHTML = listData;
}

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const userInput = inputBox.value.toLowerCase();
        if (userInput.trim() !== "") {
            select(userInput);
        }
    }
    
    // Add event listener for the backspace key
    if (e.key === "Backspace") {
        showAllCards();
    }
});

function showAllCards() {
    // Show all cards
    const subjectCards = document.querySelectorAll("#importantNotesCards .notecard");
    subjectCards.forEach((card) => {
        card.style.display = "block";
    });
    
    // Hide the "Search not found" message
    const searchNotFound = document.querySelector(".search-not-found");
    searchNotFound.style.display = "none";
}


// Add this JavaScript code to your page
document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('.search-input');
    const autocomBox = searchBar.querySelector('.autocom-box');
    const navbar = document.getElementById('navbar'); // Your navbar element
  
    searchBar.addEventListener('input', function () {
      // Calculate the margin based on the navbar's height
      const navbarHeight = navbar.offsetHeight;
      autocomBox.style.marginTop = navbarHeight + 'px';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown toggles
    var dropdownToggles = document.querySelectorAll('.navbar .nav-item.dropdown .nav-link');

    // Add click event listeners to each dropdown toggle
    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            // Close all other dropdowns
            closeOtherDropdowns(this);
        });
    });

    // Close other dropdowns except the one that was clicked
    function closeOtherDropdowns(clickedToggle) {
        dropdownToggles.forEach(function (toggle) {
            if (toggle !== clickedToggle) {
                toggle.parentElement.classList.remove('show');
            }
        });
    }

    // Close dropdowns on document click
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-item.dropdown')) {
            closeOtherDropdowns();
        }
    });
});



