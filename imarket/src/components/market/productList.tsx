import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className=" border-2 border-gray-200 min-h-screen p-16">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition relative"
            >
              <nav className="flex justify-between items-center text-gray-600 text-sm border-b pb-2">
                {/* Might use later */}
                {/* <button className="flex items-center gap-2 hover:text-black">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "
                      stroke="currentColor"
                    />
                  </svg>
                  Back
                </button> */}
                <button className="hover:text-red-500">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 512 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9
                      c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4z"
                      stroke="currentColor"
                    />
                  </svg>
                </button>
              </nav>
              <div className="flex flex-col items-center text-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-48 h-48 object-cover mt-4"
                />
                <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
                <h4 className="text-gray-500 text-sm">Popular House Plant</h4>
                <h1 className="text-2xl font-semibold mt-2">${product.price}</h1>
                <p className="text-gray-600 text-sm px-4 mt-3">{product.description}</p>
                <div className="flex gap-4 mt-4">
                  <button className="border border-gray-300 px-4 py-2 rounded hover:border-green-400 hover:text-green-600 transition">
                    Add to Cart
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded hover:border-red-400 hover:text-red-600 transition">
                    Mark as interested
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
