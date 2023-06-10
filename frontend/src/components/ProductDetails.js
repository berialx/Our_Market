const ProductDetails = ({ product }) => {

    return (
      <div className="workout-details">
        <h4>{product.title}</h4>
        <p><strong>Price (ETB): </strong>{product.price}</p>
        <p><strong>Quantity: </strong>{product.quantity}</p>
        <p>{product.createdAt}</p>
      </div>
    )
  }
  
  export default ProductDetails