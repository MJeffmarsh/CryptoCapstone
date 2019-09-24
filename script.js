'use strict'


function displayResults(responseJson) {
    //displays currency info
      $('#results').prepend(
      ` <ul class="result-list">
        <li><h2>${responseJson.name}<img src="${responseJson.image.thumb}"></h2></li>
        <li class="data">Rank</li> 
        <li>${responseJson.coingecko_rank}</li>
        <li class="data">Current Price</li>
        <li>$${responseJson.market_data.current_price.usd}</li>
        <li class="data">Market Cap</li>
        <li>$${responseJson.market_data.market_cap.usd}</li>
        <li><button class="remove">Remove</button></li>
        
        </ul>
        
        `
      );
      $('#results').removeClass('hidden');
  }
  
  function removeCoin () {
    $("#results").on('click', '.remove', function(event) {
      event.preventDefault();
      this.closest('ul').remove();
    });
  }



function searchCoins(id) {
//API that grabs currency info
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
      alert("Coin not found");
    });
}





function formSubmit() {
    $('form').submit(event => { event.preventDefault();
    let cryptoSearch = $(".crypto-search").val();
    searchCoins(cryptoSearch);
    $('.crypto-search').val('')
    });
  }

  $(formSubmit);
  $(removeCoin);
