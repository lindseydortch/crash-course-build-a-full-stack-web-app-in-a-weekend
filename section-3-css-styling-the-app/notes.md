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
- 

## Developer Skill: Googling and Reading Documentation
- 

## Styling the Voting Buttons

## Styling Form Elements

## Adapting the Layout to Smaller Screens
