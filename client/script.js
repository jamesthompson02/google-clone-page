const tenButton = document.getElementById('ten-results');
const luckyButton = document.getElementById('lucky');
const searchBar = document.getElementById('searchbar');
const errorSearchMessage = document.getElementById('error-message');
const searchResultsContainer = document.getElementById('search-results');
const homepage = document.getElementById('homepage');
const searchBarForResults = document.getElementById('searchbar-for-results');

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
            let newDiv = document.createElement('div')
            let anchor = document.createElement('a');
            let para = document.createElement('p');
            let para2 = document.createElement('p');
            let linkText = document.createTextNode(each.title);
            anchor.appendChild(linkText);
            anchor.textContent = each.title;
            anchor.href = each.link;
            para.innerText = each.description;
            para2.innerText = each.link;
            para2.style.margin = '0';
            para2.style.fontFamily = "Roboto";
            anchor.style.margin = '0';
            anchor.style.fontSize = '1.4rem';
            anchor.style.fontFamily = "Roboto";
            para.style.margin = '0';
            para.style.width = '550px';
            para.style.fontFamily = "Roboto";
            newDiv.style.margin = '1rem';
            newDiv.appendChild(para2);
            newDiv.appendChild(anchor);
            newDiv.appendChild(para);
            searchResultsContainer.appendChild(newDiv);
            searchBarForResults.value = "football";

        })).then(
            displaySearchResults()
            
        );

    } else if (searchBar.value === 'food') {
        fetch('http://localhost:3000/search/food')
        .then(response => response.json())
        .then(data => data.forEach(each => {
            let newDiv = document.createElement('div')
            let anchor = document.createElement('a');
            let para = document.createElement('p');
            let para2 = document.createElement('p');
            let linkText = document.createTextNode(each.title);
            anchor.appendChild(linkText);
            anchor.textContent = each.title;
            anchor.href = each.link;
            para.innerText = each.description;
            para2.innerText = each.link;
            para2.style.margin = '0';
            para2.style.fontFamily = "Roboto";
            anchor.style.margin = '0';
            anchor.style.fontSize = '1.4rem';
            anchor.style.fontFamily = "Roboto";
            para.style.margin = '0';
            para.style.width = '550px';
            para.style.fontFamily = "Roboto";
            newDiv.style.margin = '1rem';
            newDiv.appendChild(para2);
            newDiv.appendChild(anchor);
            newDiv.appendChild(para);
            searchResultsContainer.appendChild(newDiv);
            searchBarForResults.value = "food";

        })).then(
            displaySearchResults()
            
        );

        
    } else if (searchBar.value === 'clothes') {
        fetch('http://localhost:3000/search/clothes')
        .then(response => response.json())
        .then(data => data.forEach(each => {
            let newDiv = document.createElement('div')
            let anchor = document.createElement('a');
            let para = document.createElement('p');
            let para2 = document.createElement('p');
            let linkText = document.createTextNode(each.title);
            anchor.appendChild(linkText);
            anchor.textContent = each.title;
            anchor.href = each.link;
            para.innerText = each.description;
            para2.innerText = each.link;
            para2.style.margin = '0';
            para2.style.fontFamily = "Roboto";
            anchor.style.margin = '0';
            anchor.style.fontSize = '1.4rem';
            anchor.style.fontFamily = "Roboto";
            para.style.margin = '0';
            para.style.width = '550px';
            para.style.fontFamily = "Roboto";
            newDiv.style.margin = '1rem';
            newDiv.appendChild(para2);
            newDiv.appendChild(anchor);
            newDiv.appendChild(para);
            searchResultsContainer.appendChild(newDiv);
            searchBarForResults.value = "clothes";

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


function luckyLink() {
    let randomNum = Math.floor(Math.random() * 8);
    if (searchBar.value === 'football') {
        fetch('http://localhost:3000/search/football')
        .then(response => response.json())
        .then(data => {
            let websiteLink = data[randomNum];
            let newAnchor = document.createElement('a')
            newAnchor.href = websiteLink.link;
            luckyButton.appendChild(newAnchor);
            newAnchor.click();
        }) 
    } else if (searchBar.value === 'food') {
        fetch('http://localhost:3000/search/food')
        .then(response => response.json())
        .then(data => {
            let websiteLink = data[randomNum];
            let newAnchor = document.createElement('a')
            newAnchor.href = websiteLink.link;
            luckyButton.appendChild(newAnchor);
            newAnchor.click();
        }) 
    } else if (searchBar.value === 'clothes') {
        fetch('http://localhost:3000/search/clothes')
        .then(response => response.json())
        .then(data => {
            let websiteLink = data[randomNum];
            let newAnchor = document.createElement('a')
            newAnchor.href = websiteLink.link;
            luckyButton.appendChild(newAnchor);
            newAnchor.click();
        }) 
    } else {
        errorSearchMessage.style.display = 'block';

    }
}

luckyButton.addEventListener('click', () => {
    luckyLink();
})