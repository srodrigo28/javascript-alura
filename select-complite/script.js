const inputEl = document.querySelector("autocomplete-input");

inputEl.addEventListener("input", onInputChange);

getCountryData();

let countryName = [];

async function getCountryData(){
    const countryRes = await fetch()
    const data = await countryRes.json();

    countryNames = data.map((country) => {
        return country.name;
    });
}

function onInputChange(){
    console.log(inputEl.value)
}