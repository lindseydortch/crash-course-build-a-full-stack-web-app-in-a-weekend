# Section 6: React - Building the Final App [Day 2]

## What Is React?
- What is React? 
  - React 
    - "JavaScript library for building user interfaces (UI)"
      - Code written and shared by other developers. Makes development easier and faster 
      - We're still using JS 
      - UI - Webpage that's currently on the screen 
    - Component-based: A component is a JavaScript function that contains a piece of the UI (both its content and functionality). We build complex UIs by combining multiple components 
    - Declarative: We only describe what the UI should look like, using a syntax called JSX. Developers never manipulate the DOM directly!
    - Driven by state: State is the data that the UI is based on. When we change the state in a component, React automaticall updates the DOM. This always keeps the UI synchronized with the data 
- Why Do We Need a Front-End Library? 
  - Keeping a user interface synchronized with data is really hard and a lot of work in big applications. Front-end libraries solve this problem and take hard work away from developers 
    - React - most used in the web industry 
    - Angular 
    - Vue 
    - Svelte 
  - Libraries enforce a "right" way of structuring and writing application code (less bugs)
  - Trying to keep data (showForm?) synchronized with UI (form visibility + button text)

## Installing Node.js and Setting Up A React Project
- Walkthrough of installing Node and created our React project 

## Meeting JSX and Creating the App Component
- JSX is like having HTML inside JavaScript 
  - Syntax that React created
  - Looks like HTML so we can write our components in a way that is familiar to us 
- React takes the DOM we add to our components and places them in the div with the id of 'root'
- A component in React is essentially a React function 
- All fires that should be served on the webpage should go in the public folder - mainly our images

## Dividing Our Interface Into Components
- The App component will contain all of our components 
- We will have 
  - Header 
  - Categories 
  - Facts 
  - Fact Card 
- For this project we will do everything in the App.js file 
- Fragments - don't output any JSX element 

## Rendering the List of Facts
- Mapped through the temporary data to render our list of facts

## Passing and Receiving Props
- Think of passing props as passing function arguments 
  - Props is an object 

## Rendering the List of Categories
- Variables that never changes, leave it outside of the component 

## Introducing State
- React is primarily driven by state 
- useState - returns an array with the current state and then a function that we use to update the state 
  - We immediately destructure state 

## Displaying and Hiding the Form the React Way
- Used useState() to create functionality for showing and hiding the fact form 

## Creating the Header Component
- Created a separate header component for our app header 

## Working With Forms the React Way
- Reminder that we need to set up the value and then set the onChange to take in our setter function from the useState

## Adding a New Fact - Part 1
- Added in functionality to handle our form data 

## Adding a New Fact - Part 2
- Added in functionality to submit our data and create a new fact and have it display on the UI 

## Loading Data From Supabase with useEffect
- Without the dependency array in useEffect, then the data would be refeteched every time state updates 

## Creating a Loader Component
- Added in a loader to display on the UI when our data is loading 

## Filtering by Categories
- Whenever you need the UI to watch for re-renders in data in a useEffect, you need to add that piece of state to the dependency array 

## Uploading a Fact to Supabase
- We only put what we need to go in the object into our supabase insert 
  - Our handle submit needs to end up being an async function 
- All form elements including buttons can have a disabled attribute 

## Handling Votes and Updating a Fact on Supabase
- Added in functionality for handling votes on our app 