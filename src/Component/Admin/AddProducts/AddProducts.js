import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            img: imageURL
        }
        console.log(productData)
        fetch('https://calm-wildwood-17442.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Product add to our inventory successfully')
                }
            })
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '0d78e08aa5a18c88ef1f43e46d79d43a')
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <input name="name" {...register("name")} placeholder="Enter the product name" />
                <br />
                <br />
                <input name="price"  {...register("price")} placeholder="Enter the product price" />
                <br />
                <br />
                <input type="file" onChange={handleImageUpload} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <br />
                <input type="submit" />
                <Link to="/delete">
                    <button>Delete</button>
                </Link>

            </form>

        </div>
    );
};

export default AddProducts;