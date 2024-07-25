import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// react doesn't renders this object beacuse it doesn't understand 
// type,props,children
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

// but this is a way of creating an object for rendering where
// you don't mention type, props, children but directly give them 
const areactElement = React.createElement(
    'a',
    {href: 'http://google.com', target: '_blank'},
    'click me to visit google'
)


// here html is returned in javascript which is jsx is also 
// another way of rendering an html element
function MyApp(){
    return (
        <div>
            <h1>Custom react app</h1>
        </div>
    )
}

// another way of rendering react using jsx
const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
    areactElement
)
