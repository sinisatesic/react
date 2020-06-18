// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
//component is a function OR class - produces HTML to show the user (using JSX) and handles feedback from the user (Using event handlers)
const App = () => {
    return (    //convention for react multi-line elements
        <div>
            <label class="label" for="name">Enter name</label>
            <input id="name" type="text"/>
            <button style= {{background: 'blue', color: 'white' }}>Submit</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root') //second argument
);

//JSX looks like html but it's not html at all (special dialect of JS, actually)
//we make use of Babel to convert es2015 to normal es5 JS, if needed
//browsers natively don't understand JSX, so it has to be converted to normal JS code
