import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import DeleteProductsDetails from './DeleteProductsDetails';

const DeleteProducts = () => {
    const {deleteProduct} = useContext(UserContext);
    return (
        <div>
            {
                deleteProduct.map(pd => <DeleteProductsDetails pd={pd}/>)
            }
        </div>
    );
};

export default DeleteProducts;