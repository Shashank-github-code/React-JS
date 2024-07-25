function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innnerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('href', reactElement.props.target)
    container.appendChild(domElement)
}
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // using loop to set multiple attribute
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop])
        container.appendChild(domElement)
    }
}

// creating an object 
const reactElement = {
    type: 'a',
    // props are attributes to add
    props: {
        href: "https://google.com",
        target: '_blank',
    },
    // you can call it by any other name (its just a text to display)
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
// reactElement was an object to add to mainContainer which references to '#root'
customRender(reactElement, mainContainer)