import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

// structuring the page
/*
header
  logo
  nav-items
body
  search
  restcontainer
    restcards
      img
      name, rating, cuisine, de;ivery time
footer
  copyright
  links
  add
  contact
*/

// Let's code the above structure in React using funcitonal components


// inline css can also be applied to react components by passing the style elements as JS objects
// below is an example
const styleCard={
  backgroundColor:"yellow"
};

// applying inline CSS to the below element
const eg1=()=>{
  return (
    //the above styleCard obj that we created is passed as a value of style 
    <div className="eg" style={styleCard}>
    </div>
  )
}
// example 2 for inline CSS (this works fine)
// first {} represents the JS code is written inside and second {} represents an ovj exists there
const eg2=()=>{
  return (
    //the above styleCard obj that we created is passed as a value of style 
    <div className="eg" style={{backgourndColor:"grey"}}>
    </div>
  )
}

const Header =()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1706745600&semt=ais" alt="logo exists here" className="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestCard=()=>{
  return (
    <div className="rest-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/405645b3118d83e89db4c65361e43733" alt="res-logo" className="res-logo"/>
      <h3>Meghna Foods</h3>
      <h4>Biryani, North Indian, Chinese</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

const Body=()=>{
  return (
    <div className="body">
    <div className="search">
      Search
    </div>
    <div className="rest-container">
      <RestCard/>
      <RestCard/>
      <RestCard/>
      <RestCard/>
      <RestCard/>
      <RestCard/>
    </div>
  </div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

root.render(<App/>)