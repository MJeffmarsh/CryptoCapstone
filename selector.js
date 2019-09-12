'use strict'

function selectResults(responseJson) {
  console.log(responseJson)
  for (let i = 0; i < responseJson.length; i++) {
    $("#currency").append(
      `<option value=${responseJson[i].id}>`
    )};
}

function selectCoins() {
  const selectURL = "https://api.coingecko.com/api/v3/coins/list"

  
  fetch(selectURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => selectResults(responseJson))
    .catch(err => {
      console.log(err);
      alert("Something went wrong :(");
    });
}
$(selectCoins)
