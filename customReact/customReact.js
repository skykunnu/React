// This whole is a Custom React render method.

function customRender(reactElement,mainContainer){
    /* Generally not recommended

    const domElement=document.createElement(reactElement.type) // This line creates a new HTML anchor tag.
    domElement.innerHTML=reactElement.text
    domElement.setAttribute('href',reactElement.props.href) // This sets href attribute to the value specified in href key.
    domElement.setAttribute('target',reactElement.props.target) // This sets target attribute to the value specified in target key. (Opening the link in a new tag).


    mainContainer.appendChild(domElement);
    */

    // Below is the modern method.
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.text;
    for (const prop in reactElement.props) { // This loop will iterate through each props and set the properties accordingly.
       if(prop==='text') continue;
       domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);

}

//Below is the react element which will be rendered.
const reactElement={
    type:'a', // anchor tag is a type
    props:{   // These are properties of anchor tag, It will always be a object 
        href:'https://google.com',
        target:'_blank'
    },
    text:'Click me to visit google'
}
const mainContainer=document.getElementById("root"); // This line retrieves a DOM element from HTMl. where you want the react element to be rendered.

// This render takes two arguments:- 1) what to inject (Object). 2) where to inject (Element).
customRender(reactElement,mainContainer) // This executes the steps mentioned above to create and simulate the rendering of the anchor tag based on the provided info. 



