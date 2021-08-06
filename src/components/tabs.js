import axios from 'axios'
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
const Tabs = (topics) => {
  // <div class="topics"> </div>
  const topicDiv = document.createElement('div')
  topicDiv.classList = 'topics'

  // <div class="tab">javascript</div>
  const tab1div = document.createElement('div')
  tab1div.classList = 'tab'
  tab1div.textContent = topics[0]
  topicDiv.append(tab1div)

  // <div class="tab">bootstrap</div>
  const tab2div = document.createElement('div')
  tab2div.classList = 'tab'
  tab2div.textContent = topics[1]
  topicDiv.append(tab2div)

  //<div class="tab">technology</div>
  const tab3div = document.createElement('div')
  tab3div.classList = 'tab'
  tab3div.textContent = topics[2]
  topicDiv.append(tab3div)

  // <div class="tab">jquery</div>
  const tab4div = document.createElement('div')
  tab4div.classList = 'tab'
  tab4div.textContent = topics[3]
  topicDiv.append(tab4div)

  // <div class="tab">node.js</div>
  const tab5div = document.createElement('div')
  tab5div.classList = 'tab'
  tab5div.textContent = topics[4]
  topicDiv.append(tab5div)

  return topicDiv
}

// console.log(Tabs(['javascript', 'bootstrap', 'technology']))

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
