const tweetList = document.getElementById("tweet-list");

// creation of eventListeners
eventListeners();

function eventListeners() {
  document.querySelector(".button").addEventListener("click", LoadBtnFnc);
  document.getElementById("tweet-list").addEventListener("click", RemoveBtnFnc);
  document.addEventListener("DOMContentLoaded", getFromLocalStorage);
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
  tweetList.appendChild(li);

  //Local Storage for tweets
  addLocalStorage(tweet);

  //Alert for new tweet added
  alert("New tweet added!")

  // clean up the text area 
  this.reset();
}

function RemoveBtnFnc(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }

  removeTweetLocalStorage(e.target.parentElement.textContent);
}

function addLocalStorage(tweet) {
  let tweets = getTweetsLocalStorage();

  // Add tweets into the array
  tweets.push(tweet);

  localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetsLocalStorage() {
  let tweets;
  const tweetsLS = localStorage.getItem("tweets");

  if (tweetsLS === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(tweetsLS);
  }
  return tweets;
}

//printing data from local storage
function getFromLocalStorage() {
  let tweetsLS = getTweetsLocalStorage();

  //looping through
  tweetsLS.forEach(function (tweet) {
    // adding clear button
    clearBtn = document.createElement("a");
    clearBtn.classList = "remove-tweet";
    clearBtn.textContent = "X";

    //fetching text value
    li = document.createElement("li");
    li.textContent = tweet;

    //appending clearButton to tweet
    li.appendChild(clearBtn);
    tweetList.appendChild(li);
  });
}

// Remove tweet from local storage
function removeTweetLocalStorage(tweet) {
  let tweets = getTweetsLocalStorage();

  const tweetDelete = tweet.substring(0, tweet.length - 1);

  tweets.forEach(function (tweetLS, index) {
    if (tweetDelete === tweetLS) {
      tweets.splice(index, 1);
    }
  });

  localStorage.setItem("tweets", JSON.stringify(tweets));

  //alert for tweet removal
  alert("Tweet deleted!")
}
