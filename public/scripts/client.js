/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(data) {
  for (const tweet of data) {
    let newTweet = createTweetElement(tweet);
    $("#tweet-container").append(newTweet);
  }
};

const createTweetElement = function(tweet) {
  const tweetObject = `
      <article class="tweet header">
        <div class="tweeter">
          <div class="picture">
            <img class="profile-picture" src="${tweet.user.avatars}">
            <h4>${tweet.user.name}</h4>
          </div>
          <h4>${tweet.user.handle}</h4>
        </div>
        ${tweet.content.text}
        <hr>
        <div class="info">
          <h6>${tweet.created_at}</h6>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-share"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>
      </article>`;
  return tweetObject;
};

renderTweets(data);


$(() => {
  renderTweets(data);
});