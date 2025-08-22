import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("productDB");
        const products = await db.collection("products").find({}).toArray();

        return Response.json(products);
    } catch (error) {
        console.error("❌ GET /api/products error:", error);
        return Response.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("📩 Received product:", body);

        const client = await clientPromise;
        const db = client.db("productDB");
        const result = await db.collection("products").insertOne(body);

        return Response.json({ message: "Product added", id: result.insertedId });
    } catch (error) {
        console.error("❌ POST /api/products error:", error);
        return Response.json({ error: "Failed to add product", details: error.message }, { status: 500 });
    }
}