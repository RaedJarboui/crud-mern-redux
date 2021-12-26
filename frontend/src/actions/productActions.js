import axios from 'axios'
export const listProducts = () => async (
    dispatch
  ) => {
    try {
      dispatch({ type: 'PRODUCT_LIST_REQUEST' })
  
      const { data } = await axios.get('/products/all')
  
      dispatch({
        type: 'PRODUCT_LIST_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'PRODUCT_LIST_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const listProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_DETAILS_REQUEST' })
  
      const { data } = await axios.get(`/products/${id}`)
  
      dispatch({
        type: 'PRODUCT_DETAILS_SUCCESS',
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: 'PRODUCT_DETAILS_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const deleteProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_DELETE_REQUEST' })
  
      await axios.delete(`/products/${id}`)
  
      dispatch({
        type: 'PRODUCT_DELETE_SUCCESS',
      })
    } catch (error) {
      dispatch({
        type: 'PRODUCT_DELETE_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const createProduct = (product) => async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_CREATE_REQUEST' })
  
      const {data} = await axios.post('/products',product)
  
      dispatch({
        type: 'PRODUCT_CREATE_SUCCESS',
        payload:data
      })
    } catch (error) {
      dispatch({
        type: 'PRODUCT_CREATE_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  export const updateProduct = (product,id,history) => async (dispatch) => {
    try {
      dispatch({ type: 'PRODUCT_UPDATE_REQUEST' })
  
      const {data} = await axios.put(`/products/${id}`,product)
      setTimeout(() => {
      dispatch({
        type: 'PRODUCT_UPDATE_SUCCESS',
        payload:data
      });
      history.push("/");
    }, 1000);
      
    } catch (error) {
      dispatch({
        type: 'PRODUCT_UPDATE_FAIL',
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }