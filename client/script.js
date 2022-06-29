const tenButton = document.getElementById('ten-results');
const luckyButton = document.getElementById('lucky');
const searchBar = document.getElementById('searchbar');
const errorSearchMessage = document.getElementById('error-message');
const searchResultsContainer = document.getElementById('search-results');
const homepage = document.getElementById('homepage');

function displaySearchResults() {
    homepage.style.display = 'none';
    searchResultsContainer.style.display = 'flex';
}



function getTenResults() {
    errorSearchMessage.style.display = 'none';
    if (searchBar.value === 'football') {
        fetch('http://localhost:3000/search/football')
        .then(response => response.json())
        .then(data => data.forEach(each => {
            let anchor = document.createElement('a');
            let para = document.createElement('p');
            let linkText = document.createTextNode(each.title);
            anchor.appendChild(linkText);
            anchor.textContent = each.title;
            anchor.href = each.link;
            para.innerText = each.description
            searchResultsContainer.appendChild(anchor);
            searchResultsContainer.appendChild(para);

        })).then(
            displaySearchResults()
            
        );

    } else if (searchBar.value === 'food') {
        fetch('http://localhost:3000/search/food')
        .then(response => response.json())
        .then(data => data.forEach(each => {
            let anchor = document.createElement('a');
            let para = document.createElement('p');
            let linkText = document.createTextNode(each.title);
            anchor.appendChild(linkText);
            anchor.textContent = each.title;
            anchor.href = each.link;
            para.innerText = each.description
            searchResultsContainer.appendChild(anchor);
            searchResultsContainer.appendChild(para);

        })).then(
            displaySearchResults()
            
        );

        
    } else if (searchBar.value === 'clothes') {
        fetch('http://localhost:3000/search/clothes')
        .then(response => response.json())
        .then(data => data.forEach(each => {
            let anchor = document.createElement('a');
            let para = document.createElement('p');
            let linkText = document.createTextNode(each.title);
            anchor.appendChild(linkText);
            anchor.textContent = each.title;
            anchor.href = each.link;
            para.innerText = each.description
            searchResultsContainer.appendChild(anchor);
            searchResultsContainer.appendChild(para);

        })).then(
            displaySearchResults()
            
        );

    } else {
        errorSearchMessage.style.display = 'block';

    }
    
}

tenButton.addEventListener('click', (e) => {
    e.preventDefault();
    getTenResults();

})

searchBar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getTenResults();
    }
    
})