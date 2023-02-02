$(document).ready(function() {
  $("textarea").on('keyup', function() {
    let characterCount = this.value.length;
    const counterDiv = $(this).parents().children(".tweet-options")[0];
    let counterValue = counterDiv.lastElementChild;
    counterValue.innerText = 140 - characterCount;
    if (counterValue.innerText < 0) {
      counterValue.classList.add('overlimit');
    }
    if (counterValue.innerText > 0) {
      counterValue.classList.remove('overlimit');
    }
  });
});

