The answer of the questions is given below:

<!-- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

1. basic difference-
 a.  getElementById is used to select single element by its id and it return only one element.
 b. getElementsByClassName is used to select all elements by its class Name and it return all elements with this class Name.
 c. querySelector is used to select first element by class Name , id ,tag Name ,attributes etc.
 d. querySelectorAll is used to select all elements that match with class Name, id ,tag Name ,attributes etc.

 <!-- How do you create and insert a new element into the DOM? -->

2. document.createElement() method is used to create a new HTML element and then add content using textContent, innerText, innerHTML, or by appending child nodes with parent nodes.

<!-- What is Event Bubbling and how does it work? -->

3. Event bubbling is a process where an event that occurs on a element travels upwards through its parents and grandparents in the dom tree.
it works by-
  by clicking on a child element.
  The event first goes on the button itself.
  Then it goes up to the parent <div>.
  Then further up to <body>, then <html>, and finally document and window.

<!-- What is Event Delegation in JavaScript? Why is it useful? -->

4. Event delegation in JavaScript is a technique where a single event listener is attached to a common ancestor element to manage events for multiple descendant elements.
it useful because-
  a. cleaner code and easier maintenance
  b. improving performance

<!-- What is the difference between preventDefault() and stopPropagation() methods? -->

5. preventDefault() is used inside addEventListener() to stop the default action.Many element have default action is stopped by PreventDefault().
And stopPropagation() is used to stop event bubbling up in the dom tree .