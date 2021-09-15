import React from 'react'
import './App.css'
import Car from './Car/Car';

function App() {
  return (
    <div className="App">
        <h1>Hello world!</h1>
        <Car name='Ford' year={2018} />
        <Car name='Audi' year={2016}>
          <p style={{color: 'red'}}>COLOR</p>
        </Car><Car name='Mazda' year={2010}>
          <p style={{color: 'blue'}}>COLOR</p>
        </Car>
    </div>
  )

    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement(
    //         'h1',
    //         null,
    //         'Hello world!'
    //      )
    // )
}

export default App;
