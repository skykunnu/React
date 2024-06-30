// so here reactImg is a javascript object or Variable that will point to that image (that will include a path to that image). 
import reactImg from './assets/react-core-concepts.png'; // here this will work because of the same build process that will also make jsx code work.  
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js'; /* the CORE_CONCEPTS is placed inside curly braces because it is a named export
and when having such named exports not default exports in JS, you import with curly braces around. 
*/


const reactDescriptions=['Fundamental','Crucial','Core']

function genRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

// Below is the custom component
function Header() {

  const descriptions=reactDescriptions[genRandomInt(2)]
  
  return (
    <header>
      {/* here this dynamic value inside src is that image which we are 
      importing from above import statement. */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* this {descriptions} variable is define to render dynamic value in jsx*/}
        {descriptions} React concepts you will need for almost any app you are  
        going to build!
      </p>
    </header>
  );
}

/* Now this props parameter will be set by react
because its react that will execute this function. 
*/

/* remember, you're not calling these component functions.
 instead you're using them as html elements below in App component.
 under the hood react will call the actual functions.  
 therefore, react will pass a value for this props parameter to this function when it calls it.
 And the value that will be passed for this parameter to this function by react will be an object
 in key-value pair where key will be custom attribute like title,descriptions and value of these attributes as value.


*/
function CoreConcept(props){ 
  return(
<li>
  <img src={props.image} alt={props.title} />
<h3>{props.title}</h3>
<p>{props.descriptions}</p>
</li>
  );
}


function App() {
  return (
    <div>
       <Header></Header> {/*or <Header /> (self closing) --> custom components */}
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          
          <CoreConcept 
          // title,descriptions and img are props that are used to pass data to components. 
          /* since we have import a file (data.js) that contains all the data about title,descriptions & image for each core concept. 
          we can use CORE_CONCEPTS to dynamically set the title and so on. */ 
          title={CORE_CONCEPTS[0].title} 
          descriptions={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept 
          title={CORE_CONCEPTS[1].title} 
          descriptions={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
          />
          <CoreConcept
          title={CORE_CONCEPTS[2].title} 
          descriptions={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}
          />
          <CoreConcept
          title={CORE_CONCEPTS[3].title} 
          descriptions={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
