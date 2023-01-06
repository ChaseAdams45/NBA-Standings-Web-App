# Final Project

## Goals
- Create a fully functional website using _Express.JS_ [^1]
- Create a website frontend using
  - HTML
  - CSS
  - Bootstrap
- Integrate an _API_[^2] into your website

## Instructions

### Step 1:
To get this project started, you and your team will work together to figure out what theme you want to focus on for your final project based on the potential API's you can leverage. <br>

After deciding on a theme, you and your team should start designing the website. The following final project website structure is recommended:

- Team Page:
    - A bio panel for each team member with a photo of themselves, where they are from, their age, and a link to their portfolio website.
    - We have provided a working template of the team page for you to base your work off of.
- Home Page:
  - A custom webpage designed by your team (frontend)
  - Connects to an API to display data based on the theme/API you chose.
- Extensions:
  - You can include more pages, APIs, and information in your website if you have more time. 


### Step 2: 
Now you and your team will split up based on interests. You will either be a part of the frontend team (3 people), or the backend team (3 people). The frontend team will work on making the design that you created in HTML and CSS. The backend team will work with Express.JS and the API to get ready to launch the project.

### Step 3:

**Frontend**<br>
- Head into the folder labeled `views` and start your design in HTML and CSS start by using the `index.ejs` file. For your convenience, we have [included Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) so you can get started with coding in bootstrap right away. 

**Backend**<br>
- The Backend team will be working in the _root directory_[^3] to create routes for the teams pages in Express.JS and will also work with integration of the API into the site. To get started with Express.JS and API's, head to the `backend.md` file.

### Step 4:
Now we will merge the teams work into one app follow the steps listed below to start integration.

1. In the `index.js` file we will set the *view engine* and the views folder for express. You can do this using the code shown below.
```js
const ejs = require('ejs')
app.set('views', 'DIR_TO_VIEWS_FOLDER');
app.set('view engine', 'ejs');
```

2. Within the views folder you want to create a new file, You should name it `index.ejs`. This is how you can create other pages. For example, if you want to make a new "about" page, you should make a file in the views folder called `about.ejs`.


[^1]: Express.JS is a framework for JavaScript that runs using Node.JS.
[^2]: API is an acronym for application programming interface, a programming code that bridges computer programs together. In simple terms, it is any kind of software interface that helps two different programs communicate.
[^3]: The root directory, or root folder, is the top-level directory of a file system. The directory structure can be visually represented as an upside-down tree, so the term "root" represents the top level.