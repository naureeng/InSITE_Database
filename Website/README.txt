A Pen created at CodePen.io. You can find this one at http://codepen.io/anon/pen/JJjGqq.

 A visual card-based alternative to traditional radio inputs - no JS required. Accessible, cross-browser compatible, and mobile-friendly.

I originally attempted this with the input tag nested several layers within the .radio-tile-group container until I realized I needed a parent selector to change the tile styling when the radio button was selected (which doesn't exist!). So instead I moved it up in the hierarchy, created an invisible .input-container with the tile dimensions, and then put the styling I wanted to change on a sibling div to the input in order to take advantage of the sibling selector. 

Ideas and improvements welcome!