

var overzichtScherm = document.getElementById('overzicht');
var winkelmandjeScherm = document.getElementById('winkelmandje');
var switchButton = document.getElementById('switchButton');
switchButton.addEventListener("click", switchScreens);

console.log(overzichtScherm, winkelmandjeScherm);


var winkelmand = [];

winkelmandjeScherm.style.display = "none";
// console.log(games.title);

function switchScreens() {
    if (overzichtScherm.style.display == "none") {
        overzichtScherm.style.display = "block";
        winkelmandjeScherm.style.display = "none";

    }
    else {
        overzichtScherm.style.display = "none";
        winkelmandjeScherm.style.display = "block";
    }
}

function addToCart() {
    winkelmand.push({ name: this.dataset.name, price: this.dataset.price });
}

// console.log(games)

games.forEach((game) => {
    // stap 1 maak een nieuw element
    var gameBox = document.createElement("div");
    gameBox.classList.add("gameBoxStyle");
    var titelElem = document.createElement("h2");
    var selectGameButton = document.createElement("input");

    selectGameButton.type = "checkbox";

    // stap 2 zet de titel in het element
    titelElem.innerText = game.title;
    gameBox.innerText = game.price;

    selectGameButton.dataset.price = game.price;
    selectGameButton.dataset.name = game.title;
    selectGameButton.addEventListener("click", addToCart);

    // stap 3 zet het hele element op het scherm
    gameBox.appendChild(selectGameButton);
    gameBox.appendChild(titelElem);
    overzichtScherm.appendChild(gameBox);

});