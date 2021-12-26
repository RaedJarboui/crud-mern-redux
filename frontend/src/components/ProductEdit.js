import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import {updateProduct,listProductDetails} from '../actions/productActions'


const ProductEdit = ({match,history}) => {
    const productId=match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
    const dispatch = useDispatch()


  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productupdate = useSelector((state) => state.productupdate)
  const {loading: loadingUpdate,error: errorUpdate,success: successUpdate
  } = productupdate

  useEffect(() => {
    if (successUpdate) {
        dispatch({ type: 'PRODUCT_UPDATE_RESET' })
        history.push('/')
      } else {    
     if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setDescription(product.description)
      }
    }
    
    
  }, [dispatch,history,productId,product,successUpdate])




  const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(updateProduct({name,description,price},productId))
    
    
    
}

    return (
        <>

          <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
     
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
       
      </FormContainer> 
    </>
            
       
    )
}

export default ProductEdit

