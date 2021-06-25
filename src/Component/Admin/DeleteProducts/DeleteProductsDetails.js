import React from 'react';
import './DeleteProductsdDetails.css';

const DeleteProductsDetails = ({ pd }) => {

    const handleDeleteProduct = id => {
        fetch(`https://calm-wildwood-17442.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result =>{
                if(result){
                    alert('Product Deleted')
                }
            })

    }
    return (
        <div className="delete-container">
            <div>
                <h3>{pd.name}</h3>
                <h5>${pd.price}</h5>
                <button onClick={() => handleDeleteProduct(pd._id)}>Delete</button>
            </div>

        </div>
    );
};

export default DeleteProductsDetails;