$(() => {
  $("#create-tweet").on('submit', function(event) {
    event.preventDefault();
    // formats the tweet description to become query string
    const tweetData = $(this).serialize();
    const tweetValue = tweetData.split("=")[1];
    if (!tweetValue) {
      return $('#error-tweet').slideDown(1000);
    }
    if (tweetValue.length > 140) {
      return $('#error-tweet').slideDown(1000);
    }
    $('#error-tweet').slideUp(0);
    // gets rid of the error message if the error checks pass
    $("#tweet-text").val("");
    /* posts to the tweets url without refreshing the page
     * uses a callback once the post requests is successful to get the last tweet
     * posts the tweet as the first element in the container
     */
    $.post("/tweets", tweetData, () => {
      $.get("/tweets", (data) => {
        const newestTweet = createTweetElement(data[data.length - 1]);
        $("#tweet-container").prepend(newestTweet);
      });
    });
  });
});

