/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderTweets = function(data) {
  for (const tweet of data) {
    let newTweet = createTweetElement(tweet);
    /* Returns a string literal containing html code for the tweetcontainer
     * Adds its to the tweet-container using an id
     * unique ID to prevent accidentally appeneding to other contents
     */
    $("#tweet-container").append(newTweet);
  }
};

const createTweetElement = function(tweet) {
  /* tweetObject is html skeleton that was predesigned for tweets in the database
   * Takes incoming tweetdata from the database and fills in to appropriate location
   */
  const tweetObject = `
      <article class="tweet header">
        <div class="tweeter">
          <div class="picture">
            <img class="profile-picture" src="${tweet.user.avatars}">
            <h4>${tweet.user.name}</h4>
          </div>
          <h4>${tweet.user.handle}</h4>
        </div>
        <div class="description">${escape(tweet.content.text)}</div>
        <hr>
        <div class="info">
          <h6>${timeago.format(tweet.created_at)}</h6>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-share"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </div>
      </article>`;
  return tweetObject;
};



const loadTweets = function() {
  $.get('/tweets', function(data) {
    renderTweets(data);
  });

};

$(() => {
  loadTweets();
});
