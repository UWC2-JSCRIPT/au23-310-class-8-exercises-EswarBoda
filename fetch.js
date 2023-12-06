// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }

    // add href link to Full Article, and display snippet
    document.getElementById('article-link').href = article.web_url;
    document.getElementById('article-snippet').innerText = article.snippet;

    // Create and append new <p> tag to display Article category
    const pEl = document.createElement('p');
    pEl.id = 'article-category';
    pEl.innerText = `Article category: ${article.type_of_material}`;
    document.getElementsByClassName('container')[0].appendChild(pEl);
  });
