# Section 4: Supabase - Storing the App Data [Day 1]

## What Is Supabase?
- We have built the static version of our site, so the next step is to think of the data 
- What is Supabase? 
  - Supabase
    - Service that allows developers to easily create a back-end with a database 
    - No back-end development needed 
    - Automatically creates a database and API so we can easily request and receive data from the server 
    - API: Application Programming Interface. In this case, an API is a program that receives requests for data and then sends that data back as JSON (common data format, similar to JS objects) 
  - Back-end 
    - Web Server <--> App <--> DB using PHP, node.js or Python, etc. 
    - With supabase, we don't need to do any of this manually! It's all included 

## Creating Your Database
- Supabase is completely free for small hobby projects 
- Supabase allows us to add users to our database and then it also has API documentation it creates for us 

## Creating a Table
- Make sure to keep Row Level Security (RLS) on 

## Adding Security Policies
- Authentication -> Policies 