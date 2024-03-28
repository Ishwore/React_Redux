import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductList} />
          <Route path="/product/:productId" exact Component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
