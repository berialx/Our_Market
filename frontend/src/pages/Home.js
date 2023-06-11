import { useEffect, useState } from "react"
import { PRODUCTS } from "../products"
import { Product } from "./product"
import "../styles/shop.css"

// components
import ProductDetails from "../components/ProductDetails"

const Home = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products')
      const json = await response.json()

      if (response.ok) {
        setProducts(json)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="home">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}

export default Home