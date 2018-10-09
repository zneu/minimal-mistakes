quotes = [
  "Any time you introduce a new idea into the world there is bound to be somebody who dislikes it. If you aren't being rejected you probably aren't doing anything new. In fact, look at rejection in another way... rejection is just another option to keep moving on. Every time you see a rejection turn it into an invitation to keep going. Create an opportunity to persevere, to keep going forward. <br><br>- Joe Gebbia","spotting an opportunity, coming up with an original solution, and taking the third hardest step - putting something into the world.  <br><br>- Joe Gebbia", "'It takes this incredible perseverance and sometimes irrational belief in yourself to bring something to life in front of a lot of adversity and a lot of people saying it can’t happen.' <br><br>3- Joe Gebbia","SW<sup>2</sup> + WC = MO<br> Some will love it, some won't plus, who cares, equals, move on.<br><br>- Joe Gebbia","Keep going until you do find the people that love your idea. <br><br>- Joe Gebbia"
]

$(document).ready(function() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  $('#quote-content').html(quotes[randomNumber]);
})

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote-content').innerHTML = quotes[randomNumber];
}
