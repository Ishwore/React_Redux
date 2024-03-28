import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedProduct,
  removeSelectedProduct,
} from '../redux/actions/productActions'

const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const { title, category, description, price, image } = product
  const { productId } = useParams()
  const dispatch = useDispatch()
  console.log(product)

  useEffect(() => {
    const fetchProdcutDetails = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
          console.log('Error', err)
        })
      dispatch(selectedProduct(response.data))
    }
    if (productId && productId !== '') fetchProdcutDetails()

    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId, dispatch])
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div className="text-center">
          <h1 className="text-3xl text-red-400 mt-20">Loading ....</h1>
        </div>
      ) : (
        <div className="grid grid-cols-3 bg-gray-200 mx-3 gap-1 my-4">
          <div className=" mx-3 bg-gray-100 rounded my-3">
            <img className=" h-96 rounded px-2 py-2" src={image} alt={title} />
          </div>
          <div className="col-span-2 mx-3 bg-gray-100 rounded mx-3 my-3">
            <div className="mx-6 my-3">
              <h1 className="text-gray-900 text-4xl">{title}</h1>
            </div>
            <div className="mx-6 my-4 ">
              <h1 className=" text-yellow-400 text-3xl">${price}</h1>
            </div>
            <div className="mx-6 my-3">
              <h1 className=" text-gray-900 text-3xl">
                {category.toUpperCase()}
              </h1>
            </div>
            <div className="mx-6 my-3">
              <p className=" text-gray-900 text-justify text-2xl">
                {description}
              </p>
            </div>
            <div className="mx-6 my-5 bg-red-500 w-32 h-14 text-center rounded-lg">
              <button className="text-white text-lg px-3 py-3">
                Add To Card
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails
