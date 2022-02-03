import React, {Component} from "react";
// import logo from './logo.svg'
import './App.css';

import data from "./component/data";
// import Nav from "./component/nav";
// import Product_details from "./component/product_details";
// import Product_pages from "./component/product_pages";

class App extends Component {
    state = {
        page: 'Product_pages'
    }

    click = (pageName) => {
        this.setState({page: pageName})
    }

    render() {


        return <div>

            <div className="users">
                {data.map((user, index) => (
                    <div key={index}>
                        <div className="card" >
                            <div className="card-body">
                                <h3 className="card-title">{user.name}</h3>
                                <p className="card-text">{user.description}</p>
                                <h5 className="card-title">{user.price}</h5>
                                <button href="#" className="btn btn-primary">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


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
