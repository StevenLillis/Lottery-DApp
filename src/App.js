import './App.css';
import React, { Component } from 'react';

//Components
import Enter from './components/enter';
import Manage from './components/manage';
import Jumbotron from './components/jumbotron';

class App extends Component { 

  render() { 
    return (
      <div> 
        <Jumbotron /> 
        <Enter /> 
        <Manage /> 
      </div>
    );
  }
};

export default App;



// function App() {
//   return (
//     <div>
//       <h1> Hello World </h1>
//     </div>
//   );
// }

// export default App;



