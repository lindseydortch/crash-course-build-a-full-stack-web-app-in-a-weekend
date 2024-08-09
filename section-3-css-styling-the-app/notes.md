# Section 3: CSS - Styling the App [DAY 1]

## What is CSS?
- What is CSS? 
  - CSS 
    - Cascading Style Sheets 
    - CSS describes the visual style and presentation of the content written in HTML 
    - CSS consists of countless properties that developers use to format the content: properties about font, text, spacing, layout, etc. 
      - No need to know all the properties 
- How we select and style elements 
  - CSS Rule 
    - selector 
      - h1 {}
    - Declaration/ Style 
      - font-size: 20px 
      - Property: value
    - Declaration Block 
      - {} 

## Styling Text
- Added in text styling for the app 

## Including Google Fonts
- Added in Google Fonts for the app 
- Reminder place Google fonts before your own CSS 

## Working With Color
- Add in colors for the app 

## Inheritance and the Global Selector
- You typically put the color on the body due to inheritance, because it only goes down to it's children 
  - Buttons and forms are special elements and work with inheritence differently 

## The CSS Box Model
- The CSS Box Model 
  - Box Model: Defines how elements are displayed. Each element on a page is a rectangular box 
  - Content: Text, image, etc. 
  - Border: A line around the element, still inside of the element 
  - Padding: Empty space around content, inside of the element 
  - Visible oart of element on the page 
    - Border
    - Padding
    - Content 
  - Width and height: Dimenstions of the element, including padding an dborder 
    - When used with box-sizing: border-box;
  - Margin: Empty space outside of the element. For space between elements 

## Block and Inline Elements
- Block level elements - occupies 100% of the width that is available from the parent 
- Inline - occupy the space that they actually need for the content 
  - span, button, and strong 
  - Nothing happens with text-align 
  - CSS treats inline elements as though they were text 

## Creating Small Layouts With Flexbox
- justify-content - horizontal (when direction is a row)
- align-items - vertical (when direction is a row)
- You can now use gap in flexbox 

## Applying Flexbox to Our Facts
- margin: auto - will automatically count the margin that is necessary 

## Creating Larger Layouts With CSS Grid
- CSS is better for creating 2-dimensional layouts 

## Centering the App
- max-width - whenever there is enough space to display the specified width, if not the element will take the space that is available 

## Styling Links and Transitions
- active - when you click 
- visited - when the link is visited
- The psuedoclasses need to be in a specific order 
  - main class:link, :visited, :hover, :active
    - :link and :visited can go together if they have the same color 
    - Same above for active and hover  
- :link - will only style anchor elements with the href attribute

## Styling Buttons
- To create a gradient, we don't use background-color, we use background-image and specify a linear-gradient
- Some elements do not inherit anything, but we can tell them to inherit 
- Reminder that CSS files are read from top to bottom 

## Developer Skill: Googling and Reading Documentation
- A key skill for developers is to be able to google and read documentation 
  - Example of finding how to find how to round a button using css 
    - `css how to make rounded corners`
      - Avoid results from W3 Schools 
      - Best is going to be from MDN, but also CSS tricks is good as well 
- When doing border-radius, make your value really big if you're going for a pill ship, to account for buttons of a different height

## Styling the Voting Buttons
- Adding too many classes in the html can make it super difficult to read 
- The defualt weight for our font is 400, but we don't have to specify that 
- We nested flexbox, so it can get a little confusing, we set a shrink on the parent 
  - flex-shrink: 0 - we no longer allow our flex-item to shrink 

## Styling Form Elements
- You select the placeholder using `::placeholder` 
  - :: - means this is a pseudo-element
- Reminder: width works differently on flex items 
  - Flex-grow: 1 - take up all the space it wishes too 
  - flex-grow default is set to 0 

## Adapting the Layout to Smaller Screens
- There are many tools we can use for responsive web design 
  - We will use media queries 
- When using the responsive design in inspector, set to responsive and 75%
- Media queries need to be after the original definition 
  - You can set your media queries in a different file, but it's better to keep it close to the thing you are changing 