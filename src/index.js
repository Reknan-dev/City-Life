window.addEventListener("DOMContentLoaded", function () {
  setInitialCity();
  document.getElementById("cityInput").classList.add("city-input-focused");
  getCityInfo();
});

function setInitialCity() {
  // Imposta il valore predefinito della barra di ricerca su "Los Angeles"
  document.getElementById("cityInput").value = "Los Angeles";
}

function getCityInfo() {
  let cityName = document.getElementById("cityInput").value;
  let formattedCityName = cityName.toLowerCase().replace(/\s/g, "-");

  fetch(`https://api.teleport.org/api/urban_areas/slug:${formattedCityName}/scores/`)
    .then((response) => response.json())
    .then((data) => {
      displayCityInfo(data);
    })
    .catch((error) => {
      console.log("Si è verificato un errore:", error);
    });
}

function displayCityInfo(data) {
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (data.summary) {
    let citySummary = data.summary;
    let citySummaryDiv = document.createElement("div");
    citySummaryDiv.innerHTML = "<p>" + citySummary + "</p>";
    citySummaryDiv.classList.add("city-summary");
    resultDiv.appendChild(citySummaryDiv);
  }

  if (data.categories && data.categories.length > 0) {
    let categoriesDiv = document.createElement("div");
    categoriesDiv.innerHTML = "";
    categoriesDiv.classList.add("categories");

    for (let i = 0; i < data.categories.length; i++) {
      let category = data.categories[i];
      let categoryName = category.name;
      let categoryScore = category.score_out_of_10;

      let categoryDiv = document.createElement("div");
      categoryDiv.innerHTML =
        "<h3>" +
        categoryName +
        ":</h3>" +
        categoryScore.toFixed(1);
      categoryDiv.classList.add("category");
      categoriesDiv.appendChild(categoryDiv);
    }

    resultDiv.appendChild(categoriesDiv);
  } else {
    resultDiv.innerHTML = "Nessuna informazione disponibile per questa città.";
  }

  if (data.teleport_city_score) {
    let cityScore = data.teleport_city_score;
    let cityScoreDiv = document.createElement("div");
    cityScoreDiv.innerHTML =
      "<h2>City Score:</h2>" +
      cityScore.toFixed(1);

    cityScoreDiv.classList.add("city-score");
    resultDiv.appendChild(cityScoreDiv);
  }
}

document.querySelector(".js-search-button").addEventListener("click", () => {
  getCityInfo();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getCityInfo();
  }
});
