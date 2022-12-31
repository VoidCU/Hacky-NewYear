import logo from './hacky-newyear.png';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return (
    <div >
      <header className='App'>
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>Year World</h1>
        <nav className='navBar'>
          <li>Home</li>
          <li>About</li>
          <li>Log In</li>
        </nav>
      </header>
    </div>
  );
}

export default App;
