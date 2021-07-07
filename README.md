### Intro
Let's practice compoment communication by adding a little complexity to a simple ecommerce site. Intead of just looking at all products, we now want to look at products that are in a certain category. The user needs to be able to click on a button in one component that then changes what happens in another component.
This application is based on an existing website that does not use React. If you worked for this company, they might ask you to update their site to use React. 
https://p.w3layouts.com/demos/spareparts/web/index.html

### Setup
Fork, Clone, npm install, npm start

### Do
* Take the html out of the App component and put in separate components
  * Header - look for div with a className of "top-header" -DONE
  * Footer - look for div with a className of "footer" - DONE
  * ImageSlider - look for div with className of "image-slider" - DONE
  * ProductDetail - look for div with className of "grid_1_of_5" - DONE
    * Use PropTypes to require a prop "product" - DONE
    * Use product prop to populate the UI instead of hard coded 
  * SubHeader - look for div with className of "sub-header" - DONE
  * TopNav - look for div with className of "top-nav" -DONE 
* Make sure to import and use all these components back in App - DONE
* Create a variable in index.js called currentCategory and set it to "tires" - DONE
* Create a function in index.js called changeCategory thats takes a parameter category. It will assign category to currentCategory and call render() -DONE
* Send the changeCategory function to App and then to the TopNav component by way of props - DONE
* Send the currentCategory to App by way of props - DONE 
* App should use the currentCategory value to filter the array of products by category and then map over them to create ProductDetail components - DONE
* Modify TopNav - DONE
  * Remove existing href and replace with "#" - DONE
  * Register onClick for the links, make sure to use arrow function. Make sure to preventDefault. - DONE
  * In the arrow function call props.changeCategory("tires"). Send in the category that is appropriate for the link - DONE
