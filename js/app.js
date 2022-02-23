const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayCoute(data))
}
const displayCoute = (data) => {
    const quoteElement = document.getElementById('quote')
    quoteElement.innerText = data.quote
}