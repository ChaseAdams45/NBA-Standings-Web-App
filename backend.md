# Backend 

## Goals 
- Create a Express.JS app for you and your team to deploy
- Connect the app to an API of your teams choice


## Instructions

### Step 1 - Getting Started: 
To get started take a look at the example provided to you and see how it works. Feel free to edit anything to see how its works. After you have look at what you have been given start by editing the route if nessessary and then continue to follow the instructions.

### Step 2 - Creating A Route: 
To create a route you can add this code into your project all you have to do is replace the route.

#### Get Request
```js 
app.get('PATH_HERE', async function(req, res){
    
});
```
#### Post Request
```js 
app.post('PATH_HERE', async function(req, res){
    
});
```

To render a page use the render function in the response
**Example**
```js
res.render('FILE', {})
```

----
### Step 3 - Integrating an API:
------
* An API is a way for two or more programs to communicate with each other.

For this project we will be intergrating the API that you and your team chose to do this follow the instructions below

1) Head into your `index.js` file and find the `/` route.
2) Edit this route to fint the code your teams api needs to function 
3) Once you have edited the routes go ahead and run the program

### Useful Links
Express.JS Cheatsheet - [Click Here](https://replit.com/@web-development-course/Final-Project#.lesson/Express%20Cheatsheet.md)

  [^1]: NPM also known as **Node Package Manager** is a package manager that is used in Node.JS Project. https://www.npmjs.

if you want to know more about API's then you can read through this: 
[https://www.freecodecamp.org/news/how-to-use-rest-api/]