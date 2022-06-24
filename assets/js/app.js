// creation of eventListeners

eventListeners();

function eventListeners() {
  document.querySelector(".button").addEventListener("click", LoadBtnFnc);

  document.getElementById("tweet-list").addEventListener("click", RemoveBtnFnc);
}

// Function to loadtweet

function LoadBtnFnc(e) {
  e.preventDefault();

  //fetching text value
  const tweet = document.getElementById("tweet").value;
  li = document.createElement("li");
  li.textContent = tweet;

  // adding clear button

  clearBtn = document.createElement("a");
  clearBtn.classList = "remove-tweet";
  clearBtn.textContent = "X";

  //appending clearButton to tweet
  li.appendChild(clearBtn);
  ftweet = document.getElementById("tweet-list").appendChild(li);

  //Local Storage for tweets
  addLocalStorage();
}

function RemoveBtnFnc(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }
}

function addLocalStorage(tweet) {
  let tweets = getTweetsLocalStorage();

  // Add tweets into the array
  tweets.push(tweet);

  localStorage.setItem("tweet", JSON.stringify( tweets ));
}

function getTweetsLocalStorage() {
  let tweets;
  const tweetLS = localStorage.getItem("tweets");

  if (tweetLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetLS);
  }
  return tweets;
}
