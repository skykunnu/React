/* This index.jsx is the main entry point of our react app, since 
it is the first file to be loaded by the html file. 
 it's in this place where react app boots up
 */

import ReactDOM from "react-dom/client"; // this is special react dom library
// which in the end belongs to overall react library, which ultimately renders this app component
// so this is responsible for outputting the App component's content on the screen. 

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />); // this App component is rendered by passing JSX code to this render method
// This render method, however is being called on an object that's created with another method, createRoot method  
