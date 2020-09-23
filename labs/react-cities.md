# Intro To State Exercise

So far you've learned the following about React:

- Creating and nesting Components
- Passing props and how to using them in JSX
- Importing and setting up state
- Updating state and re-rendering the Component
- Adding and calling event listeners

Now it's time to put it all together. At a high level you will do the following:

> Using only a single App Component you will implement the logic that allows a user to click on one of 4 small images and then update the DOM to display that image as the large image.

<img src="https://i.imgur.com/RVEofv5.jpg" width=200/>

## Working Version
Here is a [working version](https://codepen.io/jkeohan/live/850f8454693590e9772f8d0f6c2f44c8) of the app so you have a reference of the base functionality that you are being asked to implement. 

The solution above was implemented using jQuery so there is no React code to inspect via DevTools.  It is meant to provide a working example of the apps functionality. 

## Starter CodeSandbox
Here is our [Starter CodeSandbox](https://codesandbox.io/s/rctr-9-8-20-react-cities-starter-kpsk5)


## Instructions
For this exercise you will do the following:

#### App Component
- Examine the working live solution and determine the functionality needed
- Examine the HTML provided in `src/index.html` as this contains the HTML elements needed for the design
- Determine how best to organize the data needed to render the images
- Create a file called imageData.js that contains an array of image objects that are assigned keys of your own choosing, but must include the image url and alt values. 
- Using Array.map() loop over the data to create the small images based on the structure you decided
- Render the array of small image elements 
- Import `useState` into App
- Use one instance of `useState` to implement the logic.  
- Work out the remaining logic needed to implement the design

**Note:** All functionality must be placed within the App Component and no additional Components should be created for this solution to work. 


#### Bonus - Green Border

- Place a green border around the image to indicate that it is the current image being displayed.
- Any other previously active image will have it's border color removed


## Bonus 1 - Traffic Light

Convert the following [Traffic Light](https://codepen.io/jkeohan/live/MWYEyMV) into a single React Component and implement the logic needed to perform the functionality in the app. 


Here is the [jQuery Solution](https://codepen.io/jkeohan/pen/MWYEyMV?editors=1010) code which shows an instance of using a `switch` statement.  

## Bonus 2 - Memory Game

Convert the following [CodePen](https://codepen.io/jkeohan/live/opvVGN) into a single React Component and implement the logic for click events and adding state.

Here is the dataset to use for the cards:

<details><summary>DataSet</summary>

```js
const cardBackgroundImage = 'https://res.cloudinary.com/jkeohan/image/upload/v1511808091/back_xldk5l.png'

const cardsArr = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-hearts_nbvwls.png"
  },

  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/queen-of-diamonds_opxv6b.png"
  },

  {
    rank: "king",
    suit: "hearts",
    cardImage: "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-hearts_njmwml.png"
  },

  {
    rank: "king",
    suit: "diamonds",
    cardImage: "https://res.cloudinary.com/jkeohan/image/upload/v1511808103/king-of-diamonds_mpn7sm.png"
  }
];
```

</details>

## Bonus 3 - Lifting State

This is an advanced bonus and requires that you do additional research on lifting react state. 

Try creating additional components for the images. You will most certainly run into issues with breaking the **onClick** functionaltiy. 

Here are some resources on lifting react state:

- Easy Read: [change-parent-component-state-from-child-using-hooks-in-react](https://webomnizz.com/change-parent-component-state-from-child-using-hooks-in-react/)
- Difficult Read: [react-lift-state](https://www.robinwieruch.de/react-lift-state)


## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## License

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.