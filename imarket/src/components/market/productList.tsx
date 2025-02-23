import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); 
      });
  }, []); 

  return (
    <div>
      <h1>Product List</h1>
      {isLoading ? (
        <p>Loading...</p> 
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} width={200} height={200} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;