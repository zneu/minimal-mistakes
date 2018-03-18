We’re going to start talking about what makes visualizations work on Wednesday, but before then I want you to start thinking about what makes a good or bad visualization. Find an example of a data visualization you find particularly clear/enlightening/informative. Why do you think it works so well, and is there anything you can pick out that the author did that made it work well? Find an example of a data visualization that makes you angry. This can take a lot of forms -- misleading, ugly, convoluted, impossible to understand. Why does it make you angry? What do you think could be done to fix it? Submit your links here so that we can discuss them on Wednesday.
Your answer
Classmates will see your answer

Good: http://www.antievictionmappingproject.net/ellis.html
This works very well because the point is made that ellis act evictions are becoming more and more of a problem in San Francisco. They inform people on what these evictions are, how to boycott supporting renting or buying form a landlord that profits from these evictions, and a way for people to report their own ellis act evictions. This is a great example of a civic project that utilizes data visualization to bring attention to a problem in San Francisco that has an effect on many people.

Bad: https://twitter.com/hnrklndbrg/status/886181647003119616
This is a horrendous data visualization project. It is pretty difficult to read, and even harder to use as a tool for answering any kind of question. I believe that when a question begs for data to be collected and visualized in order to come up with an answer is when we come up with the most powerful data visualization. The opposite of this would be collecting and graphing data and then coming up with a question/hypothesis based on the results, which is what I feel like this data visualization is doing.

JavaScript Object Notation is the format we’ll use when interacting with data. It represents data as a JavaScript-style object, which makes it very easy to import, manipulate, and use. JSON differs from normal JavaScript objects in that both the keys and values have double quote marks around them.
GeoJSON is a specific syntax of JSON used for storing geospatial data.

```JavaScript
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```

For loops run code multiple times. (You should already know this). Remember, with a for loop the first expression is the starting condition, the second is the testing condition, and the last is the update to run afterwards.
We will spend a lot of time in this class looping through arrays of data. Remember that array.length is your friend here.

```JavaScript
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

var temperatures = [65, 68, 75, 73, 80];
for (var i = 0; i < temperatures.length; i++) {
  console.log( (temperatures[i] - 32) * (5 / 9) );
}
```

Remember: JavaScript is loosely typed, which means that you don’t need to specify types and JavaScript can fudge things a little to try to make it easier for you. If you start getting errors or NaN, make sure your data isn’t being converted to strings.

Also remember: function and variable declarations are hoisted to the top of the scope, regardless of where you declare them. The values you assign aren’t hoisted, just the declaration of the variable themselves. Be careful when you’re using the same variable names for things.

JavaScript has functional scope. This means that variables are accessible within the function where they reside. JavaScript does not have block scope -- loops and if statements do not have any special scope, only functions.
When a program is run, the JavaScript engine starts at the current functional scope, looks for the variable, and goes up a level if it does not find it until it reaches global scope.

SVGs are vector graphics defined as a DOM -- they look like HTML. This means that we can manipulate them and add interactivity is much the same way as we do with HTML. Elements of an SVG are organized in a nested tree, and described through attributes. You can even add ids and classes to elements of an svg.

```html
<svg width="400" height="180">
	<rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
</svg>
```
