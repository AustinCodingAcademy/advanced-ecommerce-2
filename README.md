### Setup
Fork, Clone, yarn install, yarn start

### Do
X Take the html out of the App component and put in separate components
X Header - look for div with a className of "top-header"
X Footer - look for div with a className of "footer"
X ImageSlider - look for div with className of "image-slider"

  X ProductDetail - look for div with className of "grid_1_of_5"
    X Use PropTypes to require a prop "product"
    X Use product prop to populate the UI instead of hard coded

X SubHeader - look for div with className of "sub-header"
X TopNav - look for div with className of "top-nav"

X Make sure to import and use all these components back in App

X Create a variable in index.js called currentCategory and set it to "tires"

X Create a function in index.js called changeCategory thats takes a parameter category. It will assign category to currentCategory and call render()

X Send the changeCategory function to App and then to the TopNav component by way of props

X Send the currentCategory to App by way of props

X App should use the currentCategory value to filter the array of products by category and then map over them to create ProductDetail components

X Modify TopNav
  X Remove existing href and replace with "#"
  X Register onClick for the links, make sure to use arrow function. X Make sure to preventDefault.
  X In the arrow function call props.changeCategory("tires"). Send in the category that is appropriate for the link

  X UPDATE / IN PROGRESS
    --> 'Feedback' link unchanged, brings user to contact.html
    --> Contact.html top nav updated to visually match TopNav
    --> Clicking other top nav links from contact.html page brings
        user back to local host starting point (displaying tires)

        OPPORTUNITIES
          1. Have actual landing page display ALL prods, no filters, before
              specific top nav link selected
          2. Update/react-ify contact.html with props to display TopNav component
          3. Render overhaul to swap out <div className="content"> from
              <div className="products-box"> to contact.html component display
              when 'Feedback' TopNav link is clicked
