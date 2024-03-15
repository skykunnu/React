import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return (
//     <>
//     <h1>Custom App !</h1>
//     </>
//   )
// }

/* The above MyApp() at the end of the day gets converted into below format which is a tree structure and objects.

// The below Element is created by myself which is fine but the key value or props  made by myself will not work in react. So to cure this problem.
// there is a method called React.createElement.
const reactElement={
  type:'a', 
  props:{    
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google'
}

// If we pass whole html element then it will work fine like below one
const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit Google</a>
)



*/
// Let's see how to inject variable like username inside react element
// const anotherUser="Coffee aur react "
/*

// So to cure the above problem we used React.createElement method 
// which automatically injects itself & the injection is done by Babel (Transpiler).

const reactElement=React.createElement(
  'a', // Tag is Expected.
  {href:'https://google.com',target:'_blank'}, // attributes
  'Click me to visit google | ', // text 
  anotherUser // No Expression and conditional statement are allowed inside except variable or evaluated expressions.
)
*/
ReactDOM.createRoot(document.getElementById('root')).render( // It is a react render.
//Below is the Syntax of JSX and it can be written as MyApp() also but avoid it.
    <React.StrictMode>
     <App />
    </React.StrictMode>
    // reactElement
)
