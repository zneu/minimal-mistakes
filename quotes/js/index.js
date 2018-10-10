quotes = [
  // Joe Gebbia
  "Any time you introduce a new idea into the world there is bound to be \
  somebody who dislikes it. If you aren't being rejected you probably aren't \
  doing anything new. In fact, look at rejection in another way... rejection \
  is just another option to keep moving on. Every time you see a rejection turn\
   it into an invitation to keep going. Create an opportunity to persevere, to\
    keep going forward. <br><br>- Joe Gebbia",

  "Spotting an opportunity, coming up with an original solution, and taking\
   the third hardest step - putting something into the world. \
    <br><br>- Joe Gebbia",

  "'It takes this incredible perseverance and sometimes irrational belief in\
   yourself to bring something to life in front of a lot of adversity and a \
   lot of people saying it can’t happen.' <br><br>- Joe Gebbia","SW<sup>2</sup>\
    + WC = MO<br> Some will love it, some won't plus, who cares, equals, \
    move on.<br><br>- Joe Gebbia",

  "Keep going until you find the people that love your idea. \
  <br><br>- Joe Gebbia",

  // John Muir
  "Take a course in good water and air; and in the eternal youth of Nature you may renew your own. Go quietly, alone; no harm will befall you.<br><br>- John Muir",

  "Keep close to Nature’s heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.<br><br>- John Muir",

"  The mountains are calling and I must go.<br><br>- John Muir",

  "In every walk with nature one receives far more than he seeks.<br><br>- John Muir",

  "Everybody needs beauty as well as bread, places to play in and pray in, where nature may heal and give strength to body and soul.<br><br>- John Muir",

  "The clearest way into the Universe is through a forest wilderness.<br><br>- John Muir",

  "The power of imagination makes us infinite.<br><br>- John Muir",

  "When we try to pick out anything by itself, we find it hitched to everything else in the universe.<br><br>- John Muir",

  "I only went out for a walk and finally concluded to stay out till sundown, for going out, I found, was really going in.<br><br>- John Muir",

  "When one tugs at a single thing in nature, he finds it attached to the rest of the world.<br><br>- John Muir"

]

$(document).ready(function() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  $('#quote-content').html(quotes[randomNumber]);
})

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote-content').innerHTML = quotes[randomNumber];
}
