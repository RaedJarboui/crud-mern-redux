import React,{useEffect} from 'react'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'

//import axios from 'axios';
import { listProducts,deleteProduct } from './../actions/productActions';

const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state=>state.productList)
    const {loading,error,products} = productList
    const productdelete = useSelector(state=>state.productdelete)
    const {loading: loaddelete ,error: errordelete,success} = productdelete
    useEffect(()=>{
        dispatch(listProducts());
        
    },[dispatch,success])

    const onDelete = (id) => {

        dispatch(deleteProduct(id))

    };
  

    return (
        <>
           <h1>Latest Products</h1> 
           <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">description</th>
              <th scope="col">price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product) => (
              <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
              <LinkContainer to={`/edit/product/${product._id}`}>
                      <Button variant='danger' className='btn-sm'>                     
                        Edit
                      </Button>
                    </LinkContainer>
              <Button variant="danger" className='btn-sm' onClick={()=>onDelete(product._id)}>Delete</Button> 

              <LinkContainer to={`/product/${product._id}`}>
              <Button variant='danger' className='btn-sm'>
                        Details
                      </Button>
                  </LinkContainer>
              </td>

              </tr>
               ))}
          </tbody>
          </table>
          <Link to="/add" className="btn btn-success">
          Add New Product
        </Link>


           {/* <Row>
               {products.map((product) => (
                   <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                       <Product product={product}></Product>
                   </Col>

               ))}
           </Row> */}
        </>
    )
}

export default Home
