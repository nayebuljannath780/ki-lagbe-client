import { Button, Table } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const { cart, setCart, loggedInUser } = useContext(UserContext);
    useEffect(() => {
        const url = `https://calm-wildwood-17442.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProductDetail(data)
                setCart(data)
            })
    })

    const handleCheckout = () => {
        const orderDetails = {...loggedInUser, product:productDetail, orderTime: new Date() }
        console.log(orderDetails);

        fetch(`https://calm-wildwood-17442.herokuapp.com/addOrder`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully')
                }
            })
    }

    return (
        <div className="shadow px-4 pt-4 my-4" style={{ borderRadius: "15px" }}>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productDetail.name}</td>
                        <td>1</td>
                        <td>${productDetail.price}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>${cart.price}</td>
                    </tr>
                </tfoot>
            </Table>
            <div className="text-right">
                <Button onClick={handleCheckout} className="checkout-btn shadow-none">Checkout</Button>
            </div>
        </div>
    );
};

export default CheckOut;