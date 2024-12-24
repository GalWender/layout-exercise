interface Props {
  product: any
}
const ProductPreview = ({ product }: Props) => {
  return (
    <article className="product-preview">
      <div className="product-preview-content">
        <div className="product-image">
          <div className="placeholder-image"></div>
        </div>
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </article>
  )
}
export default ProductPreview
