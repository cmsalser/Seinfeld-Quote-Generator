const quoteElement = document.getElementById('quote')
const authorElement = document.getElementById('author')
const seasonElement = document.getElementById('season')
const episodeElement = document.getElementById('episode')
const btnElement = document.getElementById('nextQuote')
const card = document.getElementById('container')

btnElement.addEventListener('click', function() {
    generateQuote()
})

generateQuote();

let k = 0;

function generateQuote() {
    fetch('https://seinfeld-quotes.herokuapp.com/random', { headers: { Accept: 'application/json' } })
        .then(response => response.json())
        .then(data => {
            k += 360;
            card.style.transform = "rotatey(" + k + "deg)"
            card.style.transitionDuration = "1.5s"
            quoteElement.innerHTML = '"' + data.quote + '"'
            switch(data.author) {
                case 'George': authorElement.src = './img/george.png'; break;
                case 'Elaine': authorElement.src = './img/elaine.png'; break;
                case 'Jerry': authorElement.src = './img/jerry.png'; break;
                case 'Kramer': authorElement.src = './img/kramer.png'; break;
                default: authorElement.src = ''; break;
            }
            seasonElement.innerHTML = 'S | ' + data.season
            episodeElement.innerHTML = 'E | ' + data.episode 
        })
        .catch(error => console.log(error))
}