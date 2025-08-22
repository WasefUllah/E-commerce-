"use client";

import { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("google", { callbackUrl: "/dashboard/addProduct" });
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const product = {
      name: form.name.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      userEmail: session?.user?.email || "unknown", // 👈 store user email
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Product added successfully!");
        form.reset();
        router.push("/products");
      } else {
        setMessage("❌ " + data.error);
      }
    } catch (err) {
      setMessage("❌ Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return <p className="text-center mt-10">Redirecting to login...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-black p-6 rounded shadow w-full space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {message && <p className="text-center mt-4">{message}</p>}
    </div>
  );
}
