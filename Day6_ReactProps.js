//1. Basic Prop Passing
import React from "react";

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;

//2. Multiple Props

import React from "react";

function UserProfile({ firstName, lastName, age }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserProfile;

//3. Default Props
import React from "react";

function Car({ brand = "Toyota" }) {
  return <h3>Car Brand: {brand}</h3>;
}

export default Car;

//4. Props Type Validation 

import React from "react";
import PropTypes from "prop-types";

function Product({ name, price, isAvailable }) {
  return (
    <div>
      <h3>Product Name: {name}</h3>
      <p>Price: ${price}</p>
      <p>{isAvailable ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default Product;

//5. Passing functions as props
import React from "react";

function Counter({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}

export default Counter;

//6. Nested Components with Props
import React from "react";

function Child({ data }) {
  return <p>Data from parent: {data}</p>;
}

function App() {
  const parentData = "Hello from Parent!";
  return <Child data={parentData} />;
}

export default App;

//7. Conditional Rendering Based on Props

import React from "react";

function StatusMessage({ status }) {
  if (status === "success") return <p>Operation Successful!</p>;
  if (status === "error") return <p>Error occurred!</p>;
  if (status === "loading") return <p>Loading...</p>;
  return <p>Status unknown.</p>;
}

export default StatusMessage;


