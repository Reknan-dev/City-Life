/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ () => {
        eval(
          'window.addEventListener("DOMContentLoaded", function () {\r\n  setInitialCity();\r\n  document.getElementById("cityInput").classList.add("city-input-focused");\r\n  getCityInfo();\r\n});\r\n\r\nfunction setInitialCity() {\r\n  // Imposta il valore predefinito della barra di ricerca su "Los Angeles"\r\n  document.getElementById("cityInput").value = "Los Angeles";\r\n}\r\n\r\nfunction getCityInfo() {\r\n  let cityName = document.getElementById("cityInput").value;\r\n  let formattedCityName = cityName.toLowerCase().replace(/\\s/g, "-");\r\n\r\n  fetch(`https://api.teleport.org/api/urban_areas/slug:${formattedCityName}/scores/`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      displayCityInfo(data);\r\n    })\r\n    .catch((error) => {\r\n      console.log("Si è verificato un errore:", error);\r\n    });\r\n}\r\n\r\nfunction displayCityInfo(data) {\r\n  let resultDiv = document.getElementById("result");\r\n  resultDiv.innerHTML = "";\r\n\r\n  if (data.summary) {\r\n    let citySummary = data.summary;\r\n    let citySummaryDiv = document.createElement("div");\r\n    citySummaryDiv.innerHTML = "<p>" + citySummary + "</p>";\r\n    citySummaryDiv.classList.add("city-summary");\r\n    resultDiv.appendChild(citySummaryDiv);\r\n  }\r\n\r\n  if (data.categories && data.categories.length > 0) {\r\n    let categoriesDiv = document.createElement("div");\r\n    categoriesDiv.innerHTML = "";\r\n    categoriesDiv.classList.add("categories");\r\n\r\n    for (let i = 0; i < data.categories.length; i++) {\r\n      let category = data.categories[i];\r\n      let categoryName = category.name;\r\n      let categoryScore = category.score_out_of_10;\r\n\r\n      let categoryDiv = document.createElement("div");\r\n      categoryDiv.innerHTML =\r\n        "<h3>" +\r\n        categoryName +\r\n        ":</h3>" +\r\n        categoryScore.toFixed(1);\r\n      categoryDiv.classList.add("category");\r\n      categoriesDiv.appendChild(categoryDiv);\r\n    }\r\n\r\n    resultDiv.appendChild(categoriesDiv);\r\n  } else {\r\n    resultDiv.innerHTML = "Nessuna informazione disponibile per questa città.";\r\n  }\r\n\r\n  if (data.teleport_city_score) {\r\n    let cityScore = data.teleport_city_score;\r\n    let cityScoreDiv = document.createElement("div");\r\n    cityScoreDiv.innerHTML =\r\n      "<h2>City Score:</h2>" +\r\n      cityScore.toFixed(1);\r\n\r\n    cityScoreDiv.classList.add("city-score");\r\n    resultDiv.appendChild(cityScoreDiv);\r\n  }\r\n}\r\n\r\ndocument.querySelector(".js-search-button").addEventListener("click", () => {\r\n  getCityInfo();\r\n});\r\n\r\ndocument.body.addEventListener("keydown", (event) => {\r\n  if (event.key === "Enter") {\r\n    getCityInfo();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://city-life/./src/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/index.js"]();
  /******/
  /******/
})();
