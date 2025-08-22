import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const client = await clientPromise;
    const db = client.db("productDB");

    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
  } catch (error) {
    console.error("❌ GET /api/products/[id] error:", error);
    return Response.json(
      { error: "Failed to fetch product", details: error.message },
      { status: 500 }
    );
  }
}
