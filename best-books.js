const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for user provided date and display top 5 books on the web page
  const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists';
  const queryDate = `${year}-${month}-${date}`;
  const category = 'hardcover-fiction';
  const url = `${BASE_URL}/${queryDate}/${category}.json?api-key=${API_KEY}`;

  fetch(url)
    .then(function(data) {
      return data.json(); // raw JSON response
    })
    .then(function(responseJson) {
      // parse the formatted JSON response for top 5 results
      if (responseJson.num_results > 0) {
        let title = '';
        let author = '';
        let description = '';

        // we only need top 5 books, so, the top index is 4
        // All the img, book text area elements have IDs matching the index numbers
        // i.e book0, book1, img0, img1, etc
        for (let i = 0; i <= 4; i++) {
          // get book image url from the books results, and set it in <img> tag src attribute
          const imgEl = document.getElementById(`img${i}`);
          imgEl.src = responseJson.results.books[i].book_image;

          // Read title, author, description details from the books results
          title = responseJson.results.books[i].title;
          author = responseJson.results.books[i].author;
          description = responseJson.results.books[i].description;

          // Fill in title, author, description details of the book in each book's textarea
          const bookEl = document.getElementById(`book${i}`);
          bookEl.value = `Title: ${title} \n Author: ${author} \n Description: ${description} `;                  }
      }
    })
});

