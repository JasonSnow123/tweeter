$(() => {
  $("form").on('submit', function(event) {
    event.preventDefault();
    // formats the tweet description to become query string
    const tweetData = $(this).serialize();
    const tweetValue = tweetData.split("=")[1];
    
    if (!tweetValue) {
      $('label').html("Your tweet cannot be empty");
      return $('label').slideDown(1000);
    }

    if (tweetValue.length > 140) {
      $('label').html("Your tweet is too long");
      return $('label').slideDown(1000);
    }
    $('label').slideUp(0);

    /* gets rid of the error message if the error checks pass
     * and resets character count to 140
     */
    
    $("textarea").val("");
    $(this)[0][2].value = 140;
    /* posts to the tweets url without refreshing the page
     * uses a callback once the post requests is successful to get the last tweet
     * posts the tweet as the first element in the container
     */
    $.post("/tweets", tweetData)
      .done(loadTweets);
  });
});


/* TODO
 * Add event listener for toggle new area
 * Add scroll to the top button
 */

/* this callback function for ready document automatically hides the create tweet page
 * this is for on start up that the create tweet is hidden initially
 */
$(() => {
  $('.new-tweet').hide();
});

$(() => {
  $(".fa-angles-down").click(() => {
    $('.new-tweet').slideToggle();
    $('textarea').focus();
  });
});
