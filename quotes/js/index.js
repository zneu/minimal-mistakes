quotes = [
  "Any time you introduce a new idea into the world there is bound to be somebody who dislikes it. If you aren't being rejected you probably aren't doing anything new. In fact, look at rejection in another way... rejection is just another option to keep moving on. Every time you see a rejection turn it into an invitation to keep going. Create an opportunity to persevere, to keep going forward. <br><br>- Joe Gebbia","Spot an opportunity, come up with an original solution, and then tracking the hardest step of putting something into the world, trying something, putting your idea into the world. The more you can do that the more you can you spot the next opportunity. <br><br>- Joe Gebbia","SW<sup>2</sup> + WC = MO<br> Some will love it, some won't plus, who cares, equals, move on.<br><br>- Joe Gebbia","Keep going until you do find the people that love your idea. <br><br>- Joe Gebbia"
]

$(document).ready(function() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  $('#quote-content').html(quotes[randomNumber]);
})

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote-content').innerHTML = quotes[randomNumber];
}
