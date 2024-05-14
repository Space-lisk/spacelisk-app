import connectDB from "../../../../db/db"
import { Package } from "../../../../db/models/Package";

export async function GET(request: Request) {
  await connectDB();

  const packages = await Package.find();
  
  return Response.json({ data: packages })
}

export async function POST(req: Request) {
  await connectDB(); 

  const _package = await Package.create({
    name: "pro",
    price: 0.001,
    limit: 100
  });
  
  return Response.json({ data: _package });
}
