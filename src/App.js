import React, {Component} from "react";
// import logo from './logo.svg'
import './App.css';

import data from "./component/data";
// import Nav from "./component/nav";
import Product_details from "./component/product_details";
import Product_pages from "./component/product_pages";

import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

class App extends Component {
    state = {
        page: 'Product_pages'
    }

    click = (pageName) => {
        this.setState({page: pageName})
    }

    render() {


        return <div>

            <BrowserRouter>
                <Routes>
                    {/*<Route path="/" element={<Home/>}/>*/}

                    <Route path="/" element={<Product_pages/>}/>
                    <Route path="/Product_details" element={<Product_details/>}/>
                </Routes>
            </BrowserRouter>,


        </div>

    }
}


// function App() {
//     return (
//         <div>
//             <button>go 1</button>
//             <button>go 2</button>
//             <product_details/>
//             <product_pages/>
//         </div>
//     );
// }
//
//
// const Home = () => (
//     <div>
//         <h1>Home Page</h1>
//     </div>
// )

export default App;
