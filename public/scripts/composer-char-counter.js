$(document).ready(function() {
  $("textarea").on('keyup', function() {
    let characterCount = this.value.length;

    // selecting the letter counter in html through jquery
    const counterDiv = $(this).parents().children(".tweet-options")[0];
    let counterValue = counterDiv.lastElementChild;
    

    //calculating character count and displaying if it is overthe limit
    counterValue.innerText = 140 - characterCount;
    if (counterValue.innerText < 0) {
      counterValue.classList.add('overlimit');
      // overlimit class is responsible for changing font color when over 140 characters
    } else {
      counterValue.classList.remove('overlimit');
    }
  });
});

