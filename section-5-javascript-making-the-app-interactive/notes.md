# Section 5: JavaScript - Making the App Interactive [Day 1 + 2]

## What Is JavaScript?
- What is JavaScript? 
  - JavaScript 
    - JavaScript is the programming language that browsers understand 
    - Web developers use JavaScript to implement dynamic effects: respond to click events, load external data, change the HTML page content, play video, animate charts, etc. 
    - JavaScript makes webpages come to life: we can transform a normal webpage into a full-fledged web application that feels just like a mobile application 

## Displaying and Hiding the Form
- Added in functionality for toggle the form on a button click 

## Values, Variables, and Operators
- Values - examples 23, "Lisbon is in Portugal" 
  - In order to store our value, we use variables 
  - Variable is a box into which we place a value 
- let - values we can update later 
- const - we cannot update the value later
- There are 7 different data types in JavaScript 
  - strings 
  - numbers
  - booleans 
  - null 
  - undefined 
- In other programming languages we need to specify what type of data type a value is, but not in JavaScript 

## Functions
- One of the most important concepts in programming 
- There are a couple of built in functions in JavaScript 
  - parseInt() - returns a number from a string 
  - console.log - is a function, it prints to the console 

## Taking Decisions With if/else Statements
- If takes in a condition and does what is in the {} if that condition returns true and then will go to the else or else if, if that condition is not true 
- Falsey values 
  - 0 
  - Empty string 
  - Null 
  - Undefined 
- Truthy - not a falsey value and JS converts the condition to true automatically when evaluated in an expression 

## The Ternary Operator
- Shortened if/else statement utilizing the syntax 
  - `condition ? output truthy : output falsey`

## Working With Strings
- We can call functions on strings 
  - .toUpperCase()
- Method - a function being called on something 
- Template literal (string) - make a string dynamic -- `` 
  - Allow you to use values in your string 

## Arrow Functions
- The goal is to write function in one line without using the return keyword 
  - `const calcFactAge2 = (year) => 2022 - year`
  - Best for one line functions or callback functions  

## Arrays
- Arrays is another type of value that aggregates different types of variables 
  - A value is like a box and an array is like a shelf you can place multiple boxes one after the other 
  - Arrays have 0 based indexes 
- Array methods are very powerful 
- It's common to create variables from an array 
  - const [text, createdIn, isCorrect] = fact 
    - fact was previously defined array 
    - This is how you destructure an array
- Common operation is to add elements to an array
  - We do this by spreading our array 
    - const newFact = [..fact, 'society']
      - Returns the original array with the added fact, you can also reverse this 
      - We can only do this inside of arrays 

## Objects
- Objects - similar to arrays, allow us to aggregate different values into one big value 
  - Objects gives each of the object elements a name 
  - Key/ Value pairs - are a property of the object 
- You can also spread an object like we did with arrays 
  - const {category, isCorrect} = factObj 
  - Something arrays don't have that objects do is methods 
    - This is just a functiont that looks like a property inside of an object 
      - To call you use dot notation using the () 

## Looping Over Arrays: The forEach and map Mathods
- Looping over an array means to perform an action for each of the array items 
- .forEach() - we need to pass a function to our function 
  - In practice not the most used method because we often want to create a new array based on our original array 
- This is where .map() comes in 

## What is the DOM?
- What is the DOM? 
  - DOM 
    - Document Object Model 
    - Tree-like representation of the HTML document 
    - Each HTML element is represented as a JavaScript object, which allows JavaScript to access HTML elements 
    - DOM objects contain methods and properties to manipulate them: change text and HTML attributes, insert new HTML elements, etc. (DOM manipulation)

## Going Back to the First DOM Manipulation
- DOM elements are an object, so we can inspect them in the console 
- console.dir - shows us the entire DOM object 
- .innerHTML - doesn't manipulate the html file, it manipulates the DOM 

## Creating DOM Elements
- In JS you can call a function before it's created if you use the function keyword 

## Loading Data With fetch and async/await
- Set up the fetch request to get our data for the app from supabase

## The filter and find Array Methods
- .filter() - we specify a condition and returns that item to the array if it meets that condition -- creates a new array
  - Returns a new array  
- .find() - returns the first element of the array for which the filter function returns true 
  - More of a helper method 
  - Find only returns a value 