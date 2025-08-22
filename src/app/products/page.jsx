"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-screen">
        {products.map((p) => (
          <div
            key={p._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition h-50"
          >
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p className="font-bold mt-2">${p.price}</p>
            <Link
              href={`/products/${p._id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
