import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import { setProducts } from '../redux/actions/productActions'

const ProductList = () => {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
          console.log('Error', err)
        })
      dispatch(setProducts(response.data))
    }
    fetchProducts()
  }, [dispatch])
  console.log('Products:', products)
  return (
    <div className="grid ">
      <Product />
    </div>
  )
}

export default ProductList
