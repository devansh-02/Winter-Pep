
//1. Handling Click Events
import React from "react";

function ClickButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ClickButton;

//2. Form Submission Handling

import React, { useState } from "react";

function FormSubmit() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmit;

//3. Event Binding in Class Components

import React, { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;

//4. Synthetic Events

import React from "react";

function SyntheticEventExample() {
  const handleChange = (event) => {
    console.log("Input Value:", event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}

export default SyntheticEventExample;

//5. Event Delegation

import React from "react";

function ItemList() {
  const handleClick = (event) => {
    console.log(event.target.textContent);
  };

  return (
    <ul onClick={handleClick}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
}

export default ItemList;

//6. Mouse Events

import React, { useState } from "react";

function HoverBox() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: bgColor,
        border: "1px solid black",
      }}
      onMouseEnter={() => setBgColor("lightblue")}
      onMouseLeave={() => setBgColor("white")}
    />
  );
}

export default HoverBox;

//7. Keyboard Events
import React from "react";

function KeyPressInput() {
  const handleKeyPress = (event) => {
    console.log("Key Pressed:", event.key);
  };

  return <input type="text" onKeyPress={handleKeyPress} />;
}

export default KeyPressInput;
