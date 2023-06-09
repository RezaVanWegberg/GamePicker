var overzichtScherm = document.getElementById('overzicht');
var winkelmandjeScherm = document.getElementById('winkelmandje');
var switchButton = document.getElementById('switchButton');

var priceFilterButton = document.getElementById('priceFilterButton');
var priceFilterInput = document.getElementById('priceFilterInput');

var genreFilterButton = document.getElementById('genreFilterButton');
var genreFilterInput = document.getElementById('genreFilterInput');

switchButton.addEventListener("click", switchScreens);
priceFilterButton.addEventListener("click", filterPrice);
genreFilterButton.addEventListener("click", filterGenre);


console.log(overzichtScherm, winkelmandjeScherm);


var winkelmand = [];

winkelmandjeScherm.style.display = "none";
console.log(games);

function switchScreens() {
    if (overzichtScherm.style.display == "none") {
        overzichtScherm.style.display = "block";
        winkelmandjeScherm.style.display = "none";

    }
    else {
        overzichtScherm.style.display = "none";
        winkelmandjeScherm.style.display = "block";
        renderWinkelMandjeContent();
    }
}

function addToCart() {
    //check if it is included in the list
    const foundAtIndex = winkelmand.findIndex(wantedGame => wantedGame.name === this.dataset.name);
    if (foundAtIndex > -1) {
        //remove 
        winkelmand.splice(foundAtIndex, 1);
    }
    else {
        winkelmand.push({ name: this.dataset.name, price: this.dataset.price });
    }
    //push alleen als deze NIET in de lijst voorkomt
    //Remove alleen als deze WEL in de lijst voorkomt
}

function renderWinkelMandjeContent() {


    // clear de inhoud
    // winkelmandjeScherm.innerHTML = "<h1>Dit is het scherm voor het winkelmandje";
    winkelmandjeScherm.innerHTML = "<h1>scherm winkelmandje</h1>";


    var totalPrice = 0;
    var winkelmandList = document.createElement('ul');

    winkelmand.forEach((winkelmandItem) => {
        var winkelmandElem = document.createElement('li');
        //create listItem (LI)
        winkelmandElem.innerText = winkelmandItem.name + " - " + winkelmandItem.price;
        winkelmandList.appendChild(winkelmandElem);

        totalPrice += parseFloat(winkelmandItem.price);
    });
    winkelmandjeScherm.appendChild(winkelmandList);

    var prijsElem = document.createElement('p');
    prijsElem.innerText = totalPrice;
    winkelmandjeScherm.appendChild(prijsElem);

}

// console.log(games)

renderGames(games);


function filterPrice() {
    var maxPrice = parseFloat(priceFilterInput.value);
    var filteredList = games.filter(game => parseFloat(game.price) <= maxPrice);
    console.log(filteredList);
    renderGames(filteredList);
}

function filterGenre() {
    var gekozenGenre = genreFilterInput.value;
    var filteredList = games.filter(game => game.genre === gekozenGenre);
    console.log(filteredList);
    renderGames(filteredList);
}


function renderGames(gamesToRender) {
    overzichtScherm.innerHTML = "<h1>scherm overzicht</h1>";

    gamesToRender.forEach((game) => {
        // stap 1 maak een nieuw element
        var gameBox = document.createElement("div");
        gameBox.classList.add("gameBoxStyle");
        var titelElem = document.createElement("h2");
        var selectGameButton = document.createElement("input");

        selectGameButton.type = "checkbox";

        // stap 2 zet de titel in het element
        gameBox.innerText = game.price;
        titelElem.innerText = game.title;

        selectGameButton.dataset.price = game.price;
        selectGameButton.dataset.name = game.title;
        selectGameButton.addEventListener("click", addToCart);

        // stap 3 zet het hele element op het scherm
        gameBox.appendChild(selectGameButton);
        gameBox.appendChild(titelElem);
        overzichtScherm.appendChild(gameBox);

    });

}