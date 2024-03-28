import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Product = () => {
  const products = useSelector((state) => state.allProducts.products)

  return (
    <div className="grid grid-cols-4">
      {Object.keys(products).length === 0 ? (
        <div className="text-center col-span-4">
          <h1 className="text-3xl text-red-400 mt-20">Loading ....</h1>
        </div>
      ) : (
        products.map((product) => (
          <div className="bg-gray-200 mx-4 my-4 rounded" key={product.id}>
            <Link to={`product/${product.id}`}>
              <div className="px-3 py-3">
                <div className="w-full">
                  <img
                    className="w-full h-80 rounded px-2 py-2"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="mx-2">
                  <h1 className="text-gray-900">{product.title}</h1>
                </div>
                <div className="mx-2">
                  <h1 className=" text-yellow-400 text-xl">${product.price}</h1>
                </div>
                <div className="mx-2">
                  <h1 className=" text-gray-900">{product.category}</h1>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Product
