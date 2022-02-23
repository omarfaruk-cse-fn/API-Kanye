const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = (data) => {
    const countriesDib = document.getElementById('countries')
    data.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Official Name : ${country.name.official}</p >
        <p> Capital : ${country.capital}</p >
        <button onclick="loadCountryByName('${country.name.common}')"> Details </button>
        `
        countriesDib.appendChild(div)
    })
}
const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = (country) => {
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <h5>Country Name: ${country.name.common}</h5>
    <p>Population: ${country.population}</p>
    <img src="${country.name.flag}">
    `
}