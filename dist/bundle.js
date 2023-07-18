(() => {
  function e() {
    document.getElementById("cityInput").value = "Los Angeles";
  }
  function t() {
    let e = document
      .getElementById("cityInput")
      .value.toLowerCase()
      .replace(/\s/g, "-");
    fetch(`https://api.teleport.org/api/urban_areas/slug:${e}/scores/`)
      .then((e) => e.json())
      .then((e) => {
        !(function (e) {
          let t = document.getElementById("result");
          if (((t.innerHTML = ""), e.summary)) {
            let n = e.summary,
              i = document.createElement("div");
            (i.innerHTML = "<p>" + n + "</p>"),
              i.classList.add("city-summary"),
              t.appendChild(i);
          }
          if (e.categories && e.categories.length > 0) {
            let n = document.createElement("div");
            (n.innerHTML = ""), n.classList.add("categories");
            for (let t = 0; t < e.categories.length; t++) {
              let i = e.categories[t],
                c = i.name,
                o = i.score_out_of_10,
                d = document.createElement("div");
              (d.innerHTML = "<h3>" + c + ":</h3>" + o.toFixed(1)),
                d.classList.add("category"),
                n.appendChild(d);
            }
            t.appendChild(n);
          } else
            t.innerHTML = "Nessuna informazione disponibile per questa città.";
          if (e.teleport_city_score) {
            let n = e.teleport_city_score,
              i = document.createElement("div");
            (i.innerHTML = "<h2>City Score:</h2>" + n.toFixed(1)),
              i.classList.add("city-score"),
              t.appendChild(i);
          }
        })(e);
      })
      .catch((e) => {
        console.log("Si è verificato un errore:", e);
      });
  }
  window.addEventListener("DOMContentLoaded", function () {
    t(),
      document.getElementById("cityInput").classList.add("city-input-focused"),
      e();
  }),
    e(),
    document
      .querySelector(".js-search-button")
      .addEventListener("click", () => {
        t();
      }),
    document.body.addEventListener("keydown", (e) => {
      "Enter" === e.key && t();
    });
})();