import ProductList from '../cmps/product-list'

export const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      description: 'High-quality wireless headphones with noise cancellation',
    },
    { id: 2, name: 'Smart Watch', price: 299.99, description: 'Feature-rich smartwatch with health tracking' },
    { id: 3, name: 'Laptop Stand', price: 49.99, description: 'Ergonomic aluminum laptop stand for better posture' },
    { id: 4, name: 'Mechanical Keyboard', price: 149.99, description: 'Premium mechanical keyboard with RGB lighting' },
    { id: 5, name: 'Wireless Mouse', price: 79.99, description: 'Ergonomic wireless mouse with precision tracking' },
    { id: 6, name: 'USB-C Hub', price: 69.99, description: 'Multi-port USB-C hub with power delivery' },
  ]

  return (
    <section className="home">
      <ProductList products={products} />
    </section>
  )
}
