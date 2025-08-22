"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="p-6">Loading product...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-700 mb-2">{product.userEmail}</p>
      <p className="text-lg font-semibold">Price: ${product.price}</p>
    </div>
  );
}
