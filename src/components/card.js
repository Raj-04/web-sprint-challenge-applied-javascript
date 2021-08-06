import axios from 'axios'
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const Card = (article) => {

  // <div class="card"></div>
  const cardDiv = document.createElement('div')
  cardDiv.className = 'card'

  // <div class="headline">{ headline }</div>
  const headlineDiv = document.createElement('div')
  headlineDiv.classList = 'headline'
  headlineDiv.textContent = article.headline
  cardDiv.append(headlineDiv)

  // <div class="author"></div>
  const authorDiv = document.createElement('div')
  authorDiv.classList = 'author'
  cardDiv.append(authorDiv)

  // <div class="img-container"></div>
  const containerDiv = document.createElement('div')
  containerDiv.classList = 'img-container'
  authorDiv.append(containerDiv)

  // <img src={ authorPhoto }>
  const image = document.createElement('img')
  image.setAttribute('src', article.authorPhoto)
  containerDiv.append(image)

  // <span>By { authorName }</span>
  const spanTag = document.createElement('span')
  spanTag.textContent = article.authorName
  authorDiv.append(spanTag)

  cardDiv.addEventListener('click', e => {
    console.log(headlineDiv.textContent)
  })

  return cardDiv
}

// console.log(Card('Awesome', 'Photo', 'Randy'))


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  const cardMaker = document.querySelector(selector)

  axios.get(`http://localhost:5000/api/articles`)
  .then(res => {
    const data = res.data.articles;
    for(let articles in data){
      data[articles].forEach(i => {
        cardMaker.appendChild(Card(i))
      })
    }
  })
  .catch(err => {
    console.error(err)
  })
}

export { Card, cardAppender }
