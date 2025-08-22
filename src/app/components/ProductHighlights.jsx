"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        // Show only first 3 products as highlights
        setProducts(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching highlights:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="py-10 px-6 bg-black">
      <h2 className="text-2xl font-bold text-center mb-6">
        Product Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow p-4 bg-black border-white"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-bold mt-2">${product.price}</p>
            <Link
              href={`/products/${product._id}`}
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/products"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
