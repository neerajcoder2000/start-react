
import React from 'react'
import ReactDOM from 'react-dom/client' 
import App from './App.jsx' 

function MyApp(){
  return(
    <h1>Custom App !</h1>
  )
}

const customElement = (
      <a href="https://google.com" target='_blank'>Visite Google Baba</a>
)

const reactElement = React.createElement(
     'a',
     {href: "https://google.com", target:"_blank"},
     "click me to visit Google Baba"
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <App /> 
  
)
