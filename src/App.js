import './App.css';
import React from 'react';
import ProductCard from './components/ProductCard/ProductCard.js'
import shirtOne from './assets/shirt-1.jpg'

export default class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="App">
                <ProductCard itemName={"Ultrafine Merino T-shirt"} price={"$80.00"} currentRating={4} itemImage={shirtOne}/>
            </div>
        )
    }
}


