import { NextRequest } from "next/server";
import connectDB from "../../../../db/db"
import { User } from "../../../../db/models/User";

export async function GET(request: NextRequest) {
  await connectDB();
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('user')

  const user = await User.findOne({
      wallet_address: query
  }).populate("package");

  return Response.json({ data: user });
}