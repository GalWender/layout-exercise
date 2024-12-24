import ProductPreview from './product-preview'

interface Props {
  products: any
}
const ProductList = ({ products }: Props) => {
  return (
    <section className="product-list">
      {products.map((product: any) => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </section>
  )
}
export default ProductList
