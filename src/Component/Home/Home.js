import React, { useContext, useEffect, useState } from 'react';
import Products from '../Products/Products';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

const Home = () => {
    const [products, setProducts] = useState([]);
    const {setDeleteProduct} = useContext(UserContext);
    useEffect(() => {
        fetch('https://calm-wildwood-17442.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDeleteProduct(data)
                
            })
    }, [])

    const classes = useStyles();

    return (
        <div className="row">
            {products.length === 0 && <div className={classes.root}>
                <CircularProgress />
            </div>}
            {
                products.map(products => <Products products={products} key={products._id}></Products>)
            }
        </div>
    );
};

export default Home;