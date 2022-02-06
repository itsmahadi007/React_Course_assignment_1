import logo from './logo.svg';
import './App.css';

import product

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


function App() {
    return (
        <div>
            <button>go 1</button>
            <button>go 2</button>
            <product_details/>
            <product_list/>
        </div>
    );
}


const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
)

export default App;
