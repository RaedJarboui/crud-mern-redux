import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap';
//import products from '../products';
import Product from './Product';
import axios from 'axios';
const Home = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fetchProducts = async()=>{
            const {data} = await axios.get('/products');
            setProducts(data);
        }
        fetchProducts()

    },[products])
    return (
        <>
           <h1>Latest Products</h1> 
           <Row>
               {products.map((product) => (
                   <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                       <Product product={product}></Product>
                   </Col>

               ))}
           </Row>
        </>
    )
}

export default Home
