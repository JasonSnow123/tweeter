$(() => {
  $("#create-tweet").on('submit', function(event) {
    event.preventDefault();
    const tweetData = $(this).serialize();
    $.post("/tweets", tweetData);
  });
});

