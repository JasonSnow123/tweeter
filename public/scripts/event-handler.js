$(() => {
  $("form").on('submit', function(event) {
    event.preventDefault();
    // formats the tweet description to become query string
    const tweetData = $(this).serialize();
    const tweetValue = tweetData.split("=")[1];
    if (!tweetValue) {
      return $('label').slideDown(1000);
    }
    if (tweetValue.length > 140) {
      return $('label').slideDown(1000);
    }
    $('label').slideUp(0);
    // gets rid of the error message if the error checks pass
    $("textarea").val("");
    /* posts to the tweets url without refreshing the page
     * uses a callback once the post requests is successful to get the last tweet
     * posts the tweet as the first element in the container
     */
    $.post("/tweets", tweetData)
      .done(loadTweets);
  });
});


