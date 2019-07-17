const url = "https://restcountries.eu/rest/v2/name/",
  countriesList = document.getElementById("countries");

document.getElementById("search").addEventListener("click", searchCountries);

function prependChild(parentEle, newFirstChildEle) {
  parentEle.insertBefore(newFirstChildEle, parentEle.firstChild);
}
function searchCountries() {
  let countryName = document.getElementById("country-name").value;
  if (!countryName.length) countryName = "Poland";

  fetch(url + countryName)
    .then(function(resp) {
      return resp.json();
    })
    .then(showCountriesList);
}

function showCountriesList(resp) {
  countriesList.innerHTML = "";

  resp.forEach(function({ name, capital, flag }) {
    let liEl = document.createElement("li");
    let spanEl = document.createElement("span");
    let imgEl = document.createElement("img");

    imgEl.src = flag;

    liEl.innerText = name;
    liEl.insertAdjacentElement("afterbegin", imgEl);
    spanEl.innerText = " Capital city: " + capital;

    liEl.appendChild(spanEl);
    countriesList.appendChild(liEl);
  });
}
