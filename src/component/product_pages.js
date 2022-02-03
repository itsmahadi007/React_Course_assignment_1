import React, {Component} from "react";
// import logo from '../logo.svg'
import '../App.css';
import data from "./data";

// import Nav from "./component/nav";

class Product_pages extends Component {
    state = {
        applicationname: "aa"
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

export default Product_pages;


