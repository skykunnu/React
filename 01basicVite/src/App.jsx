import Coffee from "./chai"

function App() {
const username="To Jaipur,India" // declare a new variable 
  return (
  
    /*
    You cannot write h1, p and furthermore tags in jsx.
    According to jsx rule you can only return one element.
    So what you can do is wrap all other elements into single empty div element or fragments.
*/
    // <h1></h1> 
    // <p></p>

    //Below we are returning it as single element.
    // This wrapping is called fragment in react.
    // In react if you want to use variable, use curly braces and put the {variable name}->(It is called as evaulated expression (Only final outcomes)) inside it.
    <>  
    <Coffee />
    <h1>All the way from Africa {username}</h1> 
    <p>Enjoy! The Real Aroma of Coffee</p>
    </>
  )
}

export default App
