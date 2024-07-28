document.addEventListener('DOMContentLoaded', function () {
    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = searchParams.get('search');
    const filterOptions = searchParams.get('filter');
    
    if (searchTerm) {
        searchRecipes(searchTerm);
    }

    if (filterOptions) {
        filterRecipes(filterOptions);
    }

    document.getElementById('filterForm').addEventListener('change', function () {
        filterRecipes(document.querySelector('input[name="filterOptions"]:checked').value);
    });

    document.getElementById('showAllButton').addEventListener('click', function () {
        showAllRecipes();
    });
});

function searchRecipes(searchTerm) {
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        const title = card.getAttribute('data-title');
        if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterRecipes(filterOption) {
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (categories.includes(filterOption)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function showAllRecipes() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.style.display = 'block';
    });
    document.querySelectorAll('input[name="filterOptions"]').forEach(radio => {
        radio.checked = false;
    });
}
