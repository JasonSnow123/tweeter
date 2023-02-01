$(() => {
  $("#create-tweet").on('submit', function(event) {
    event.preventDefault();
    const tweetData = $(this).serialize();
    const tweetValue = tweetData.split("=")[1];
    if (!tweetValue) {
      return alert("Empty Tweet");
    }
    if (tweetValue.length > 140) {
      return alert("Tweet content too long");
    }
    $("#tweet-text").val("");
    $.post("/tweets", tweetData);
  });
});

