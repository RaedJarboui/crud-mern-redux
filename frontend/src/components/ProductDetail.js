import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'


const ProductDetail = ({match}) => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        const fetchProduct = async()=>{
            const {data}= await axios.get(`/products/${match.params.id}`)
            setProduct(data);
            //console.log(product)
            //console.log(match.params.id)

        }
        fetchProduct();
    },[product,match])
    return (
        <>
        <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                <h3>{product.title}</h3>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                 
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            </Row>
            </>
            
    )
}

export default ProductDetail

