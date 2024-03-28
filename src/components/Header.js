import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="grid-flex bg-gray-200 h-24">
      <Link to="/">
        <h1 className=" text-xl text-gray-600 pt-6 pl-10  ">FakeShop</h1>
      </Link>
    </div>
  )
}

export default Header
