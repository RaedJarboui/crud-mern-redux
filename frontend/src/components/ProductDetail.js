import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import {listProductDetails} from './../actions/productActions';


const ProductDetail = ({match}) => {
  const productDetails = useSelector(state=>state.productDetails)
    const {loading,error,product} = productDetails
  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(listProductDetails(match.params.id))
      console.log(product)
        },[match])
        console.log(product);

    return (
        <>
        <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

          <Row>
           
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                <h3>{product.name}</h3>
                  <h3>{product.description}</h3>
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

