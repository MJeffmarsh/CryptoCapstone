"use strict";

const apiKey= "0b96bfa94a4246468b33f478caba0a39";
const newsURL ="https://newsapi.org/v2/everything";

function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayNews(responseJson) {
  

   for (let i = 0; i < responseJson.articles.length; i++) {
    //displays headlines w/thumbnail
     $('#news').append(
  `<div class="article-container">
    <a href="${responseJson.articles[i].url}">
       <div class="articles">
       <div class="thumbnail">
       <img src="${responseJson.articles[i].urlToImage}">
       </div>
        <ul class="articles-list">
          <li class="title">${responseJson.articles[i].title}</li>
          <li class="description">${responseJson.articles[i].description}</li>
          </ul>
        </div>
      </a>
    </div> `
     )};
}

function findNews() {

    const params = {
    q: "cryptocurrency",
    pageSize: 10,
    apiKey: apiKey
    };

    const queryString = formatQueryParams(params);
    const url = newsURL + "?" + queryString;

    

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(responseJson => displayNews(responseJson))
    .catch(err => {
      console.log(err);
      alert("Something went wrong :(");
    });
  }

  $(findNews);