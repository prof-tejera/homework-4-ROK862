## Project Link:
https://rok862.github.io/CSCI39HomeWork-4/

## How I deployed the project:
- I used Github pages, nothing special here. 

## Features and comments:
- I used CSS to style components, and reduced duration of animated transitions on button hover state to 0.2 seconds--as per previous guidance.
- I fixed a bug--which now contemplating on it, may have been intentional--which forced input/calculations to be parsed as integers. It rounded the values up or down, before and after calculations. 
- I added new features such as Square Root, Qube Root, Pi, and a display for equations.
- I added an on-button click sound to maintain the illusion--and perhaps enable the user to keep track of how many times a button was clicked if any.
- I created new state values which parse down to components and manipulate UI. Some components enable the display to change the font size if the text has grown out of rect. 


## Assignment

In this assignment you will start with a basic calculator and style it using `CSS`, `inline styles`, and `styled-components`.

<div style="display: flex; justify-content: center; padding: 10px 0;">
<img src="images/worst_calculator.png" alt="calculator example" width="350"/>
</div>

As you can tell the current layout needs a lot of styling work. Modify the layout, components, and calculator logic however you want. Everything is free game!

## Deliverable

1. Style the calculator however you want. Feel free to use any colors, layout, and animations that you would like. Be as creative as you want.
2. Define all PropTypes for `Number`, `Operator`, and `Screen` components. If you add more components make sure to define the PropTypes.
3. Deploy your application using any method you want (repo is setup for Github actions). Add the url: URL_TO_PROJECT

### Deployment Instructions (Github actions)

- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save
- In `package.json`, add a new key/value as: `"homepage": "https://prof-tejera.github.io/<repo>"`

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

For other ways to deploy see https://github.com/prof-tejera/react-deployment-code

## Bonus Points

1. Add support for decimal places.
2. Add support for negative numbers.
3. How are you handling the overflow of text? How might we handle situations in which we are dealing with really large numbers?

## How to run the project

`npm i && npm start`

Open [http://localhost:3000](http://localhost:3000)
