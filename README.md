### Setup
DONE --- Fork, Clone, yarn install, yarn start

### Do
* Take the html out of the App component and put in separate components
  * DONE --- Header - look for div with a className of "top-header"
  * DONE --- Footer - look for div with a className of "footer"
  * DONE --- ImageSlider - look for div with className of "image-slider"
  * DONE --- ProductDetail - look for div with className of "grid_1_of_5"
    * Use PropTypes to require a prop "product"
    * Use product prop to populate the UI instead of hard coded
  * DONE --- SubHeader - look for div with className of "sub-header"
  * DONE --- TopNav - look for div with className of "top-nav"
* DONE --- Make sure to import and use all these components back in App
* Create a variable in index.js called currentCategory and set it to "tires"
* Create a function in index.js called changeCategory thats takes a parameter category. It will assign category to currentCategory and call render()
* Send the changeCategory function to App and then to the TopNav component by way of props
* Send the currentCategory to App by way of props
* App should use the currentCategory value to filter the array of products by category and then map over them to create ProductDetail components
* Modify TopNav
  * Remove existing href and replace with "#"
  * Register onClick for the links, make sure to use arrow function. Make sure to preventDefault.
  * In the arrow function call props.changeCategory("tires"). Send in the category that is appropriate for the link
