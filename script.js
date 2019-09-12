'use strict'

$(selectCoins);

function displayResults(responseJson) {
    console.log(responseJson);

    $("#results-list").empty();
    
      $('#results-list').append(
        `<li><h2>${responseJson.name}</h2></li>
        <li>Current Price: $${responseJson.market_data.current_price.usd}</li>
        <li>Market Cap: $${responseJson.market_data.market_cap.usd}</li>`
      );
      $('#results').removeClass('hidden');
  }
  



function searchCoins(id) {

  const searchURL = `https://api.coingecko.com/api/v3/coins/${id}`;

  fetch(searchURL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      console.log(err);
      alert("Something went wrong :(");
    });
}

function formSubmit() {
    $('form').submit(event => { event.preventDefault();
    let cryptoSearch = $("#crypto-search").val();
    searchCoins(cryptoSearch)
    });
  }

  $(formSubmit);