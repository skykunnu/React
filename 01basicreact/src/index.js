import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// Below statement is the way to inject react in html file. 
const root = ReactDOM.createRoot(document.getElementById('root')); // Virtual DOM is being created by React. 
root.render(


    <App />  
  
    
);
