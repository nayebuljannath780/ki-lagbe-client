import React from 'react';
import { useHistory } from 'react-router';
import './Products.css'
const Products = ({ products }) => {
    const history = useHistory();
    const handleClick = id => {
        history.push(`product/${id}`)
    };
    return (
            <div className="shadow mx-auto col-md-4 bg-light rounded products-container">
                <img style={{ height: '300px' }} src={products.img} alt="" />
                <h4>{products.name}</h4>
                <h5>$ {products.price}</h5> <button className="btn btn-primary" onClick={() => handleClick(products._id)}>Buy Now</button>
            </div>
    );
};

export default Products;