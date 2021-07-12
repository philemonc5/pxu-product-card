import React, { Component } from 'react';
import './ProductCard.css';
import star from '../../assets/star.svg';

class ProductCard extends Component {
    constructor(props){
        super(props)
        this.state={
            hover: false
        }
        this.toggleHover = this.toggleHover.bind(this);
    }

    handleRatings(positiveRating){
        let maxRating = 5;
        let negativeRating = maxRating - positiveRating;
        let ratingStars = [];
        for(var i = 0; i < positiveRating; i++){
            ratingStars.push(<img key={"positiveRating_" + i} className="star" src={star}/>);
        }
        for(var j = 0; j < negativeRating; j++){
            ratingStars.push(<img key={"negativeRating_" + j} className="missingStar" src={star}/>)
        }
        return(ratingStars);
    }

    toggleHover(){
        this.setState({hover: !this.state.hover});
    }

    render(){
        return(
            <div className="card">
                <div className="imageContainer" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <img className={this.state.hover ? "itemImage hover" : "itemImage"} src={this.props.itemImage}/>
                    {this.state.hover ? <button className="addButton">Add to cart</button> : null}
                </div>
                <p className="itemName">{this.props.itemName}</p>
                <p className="price">{this.props.price}</p>
                {this.handleRatings(this.props.currentRating)}
            </div>
        )
    }
}

export default ProductCard;

