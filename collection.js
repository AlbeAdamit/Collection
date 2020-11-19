const category = [{
    names: 'Action',
    style: 'badge badge-pill badge-danger'
},
{
    names: 'Drame',
    style: 'badge badge-pill badge-info'
},
{
    names: 'Western',
    style: 'badge badge-pill badge-warning'
},
{
    names: 'Crime',
    style: 'badge badge badge-pill badge-dark'
},
{
    names: 'Guerre',
    style: 'badge badge badge-pill badge-danger'
},
{
    names: 'Espionnage',
    style: 'badge badge-pill badge-success'
},
{
    names: 'Comédie',
    style: 'badge badge-pill badge-primary'
}
]

const collection = [{
    name: 'Le Bon, la Brute et le truand',
    author: 'Sergio Leone',
    categorie: [category[2]],
    iframe: '<iframe src="https://www.youtube.com/embed/WA1hCZFOPqs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    description: 'The Good is Blondie, the Bad is Angel Eyes, and the Ugly is Tuco. Against the backdrop of the Civil War, they search for a fortune in gold buried in a graveyard.',
    bgimage: 'bg-image1'
},
{
    name: 'Iron Man',
    author: 'John Favreau',
    categorie: [category[0]],
    iframe: '<iframe src="https://www.youtube.com/embed/WA1hCZFOPqs" frameborder="0" allow="accelerometer; autoplay; clipboard-write encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    description: "Tony Stark, inventeur de génie, vendeur d'armes et playboy milliardaire, est kidnappé en Aghanistan. Forcé par ses ravisseurs à fabriquer une arme redoutable, il construit en secret une armure high-tech révolutionnaire qu'il utilise pour s'échapper.",
    bgimage: 'bg-image2'
},
{
    name: 'The Godfather',
    author: 'Francis Ford Coppola',
    categorie: [category[1], category[3]],
    iframe: '<iframe src="https://www.youtube.com/embed/sY1S34973zA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    description: "En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone,`parrain' de cette famille marie sa fille à un bookmaker. Sollozzo, `parrain' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse.",
    bgimage: 'bg-image3'
},
{
    name: 'The Godfather 2',
    author: 'Francis Ford Coppola',
    categorie: [category[1], category[3]],
    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9O1Iy9od7-A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    description: "Depuis la mort de Don Vito Corleone, son fils Michael règne sur la famille. Amené à négocier avec la mafia juive, il perd alors le soutien d'un de ses lieutenants, Frankie Pentageli.",
    bgimage: 'bg-image4'
},
{
    name: 'The Green Line',
    author: 'Frank Darabont',
    categorie: [category[1]],
    iframe: '<iframe src="https://www.youtube.com/embed/mccs8Ql8m8o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    description: 'Paul Edgecomb, gardien-chef du pénitencier de Cold Mountain, en 1935, en Louisiane, il était chargé de veiller au bon déroulement des exécutions capitales au bloc E (la ligne verte).',
    bgimage: 'bg-image5'
},
{
    name: 'The King',
    author: 'David Michod',
    categorie: [category[4], category[1]],
    iframe: '<iframe src="https://www.youtube.com/embed/svVykTznk9Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    description: 'Hal est un jeune prince rebelle, qui décide de quitter le royaume afin de vivre auprès du peuple. Il est couronné roi à son tour et le jeune Henri V doit désormais affronter le chaos laissé par son père derrière lui.',
    bgimage: 'bg-image6'
},
{
    name: 'Spectre',
    author: 'Sam Mendes',
    categorie: [category[5]],
    iframe: '<iframe src="https://www.youtube.com/embed/MqTZqbisiiw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    description: "James Bond se retrouve dans une mission très personnelle à Mexico puis à Rome. Pendant ce temps, à Londres, Max Denbigh, le nouveau directeur du Centre pour la Sécurité Nationale, remet en cause l'existence même du MI6, dirigé par M.",
    bgimage: 'bg-image7'
},
{
    name: 'Apocalypse Now',
    author: 'Francis Ford Coppola',
    categorie: [category[4]],
    iframe: '<iframe src="https://www.youtube.com/embed/FTjG-Aux_yQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    description: "Pendant la guerre du Vietnam, un agent de l'armée américaine s'aventure au Cambodge à la recherche d'un tyran dangereux, le colonel Kurtz, autrefois un soldat modèle qui s'est converti plus tard à la cause de l'ennemi.",
    bgimage: 'bg-image8'
},
{
    name: 'The Dictator',
    author: 'Larry Charles',
    categorie: [category[6]],
    iframe: '<iframe src="https://www.youtube.com/embed/WA1hCZFOPqs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    description: 'With his dictatorship under threat, a sleazy African leader gets into all kinds of trouble when he travels to New York to meet with the UN.',
    bgimage: 'bg-image9'
},
{
    name: 'Borat 2',
    author: 'Sacha Baron Cohen',
    categorie: [category[6]],
    iframe: '<iframe src="https://www.youtube.com/embed/WA1hCZFOPqs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>',
    description: 'The plot of Arrested Development revolves around the members of the Bluth family, a formerly wealthy family who continue to lead extravagant lifestyles despite their changed circumstances and who often find themselves drawn into interactions with incestuous undertones.',
    bgimage: 'bg-image10'
}
]

document.querySelector(".Flex1").innerHTML = "";

const mainFlex = document.querySelector(".Flex1");

for (let element of collection) {
const card = document.createElement('div');
card.className = 'flip-card';

const newCard = document.createElement('div');
newCard.className = 'flip-card-inner';


const cardBg = document.createElement('div');
cardBg.className = 'flip-card-front';


const bgImage = document.createElement('div');
bgImage.className = element.bgimage;


for (let badge of element.categorie) {
    const category = document.createElement('span');
    category.textContent = badge.names;
    category.className = badge.style;
    bgImage.appendChild(category);
}

const cardBack = document.createElement('div');
cardBack.className = 'flip-card-back';

const title = document.createElement('h1');
title.textContent = element.name;

mainFlex.appendChild(card);
card.appendChild(newCard);
newCard.appendChild(cardBg);
cardBg.appendChild(bgImage);
newCard.appendChild(cardBack);
cardBack.appendChild(title);

}

function filterSeries(pattern) {
const results = []

for (let serie of collection) {
    if (serie.name.match(pattern))
        results.push(serie)
}

const resultsDiv = document.querySelector('#results')
document.querySelector('#results').innerHTML = " ";
mainFlex.innerHTML = " ";

for (let element of results) {
    const card = document.createElement('div');
    card.className = 'flip-card';

    const newCard = document.createElement('div');
    newCard.className = 'flip-card-inner';


    const cardBg = document.createElement('div');
    cardBg.className = 'flip-card-front';


    const bgImage = document.createElement('div');
    bgImage.className = element.bgimage;


    for (let badge of element.categorie) {
        const category = document.createElement('span');
        category.textContent = badge.names;
        category.className = badge.style;
        bgImage.appendChild(category);
    }

    const cardBack = document.createElement('div');
    cardBack.className = 'flip-card-back';

    const title = document.createElement('h1');
    title.textContent = element.name;

    resultsDiv.appendChild(card);
    card.appendChild(newCard);
    newCard.appendChild(cardBg);
    cardBg.appendChild(bgImage);
    newCard.appendChild(cardBack);
    cardBack.appendChild(title);

}
}
document.querySelector('#filter_input')
    .addEventListener('keyup', input => {
        filterSeries(input.target.value)
    })