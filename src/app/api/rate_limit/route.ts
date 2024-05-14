import { NextRequest } from "next/server";
import connectDB from "../../../../db/db"
import { User } from "../../../../db/models/User";
import { RateLimit } from "../../../../db/models/RateLimit";

export async function GET(request: NextRequest) {
  await connectDB();
  const searchParams = request.nextUrl.searchParams
  const wallet_address = searchParams.get('user')

  const getUser = await User.findOne({
    wallet_address: wallet_address
  });

  if (!getUser) {
    return Response.json({ message: "Invalid user" }, {
      status: 400
    })
  }

  const rate_limit = await RateLimit.findOne({
    api_key: getUser.api_key
  })

  return Response.json({ data: rate_limit });
}

export async function POST(request: NextRequest) {
  await connectDB();
  const searchParams = request.nextUrl.searchParams
  const api_key = searchParams.get('api_key');

  const getUser = await User.findOne({
    api_key: api_key
  }).populate('package');

  if (!getUser) {
    return Response.json({ message: "Invalid user" }, {
      status: 400
    })
  }

  const rate_limit = await RateLimit.findOne({
    api_key: getUser.api_key
  });

  if (rate_limit) {
    
    if (!getUser.package) {
      return Response.json({ message: "Invalid subscription package. Kindly subscribe to a package" }, {
        status: 400
      })
    }

    if ( rate_limit.limit_count >= getUser.package.limit) {
      return Response.json({ message: "RPC call limit exceeded" }, {
        status: 400
      })
    }

    const oldLimit = rate_limit.limit_count;

    await rate_limit.updateOne({
      limit_count: oldLimit + 1
    });

    return Response.json({ data: "True" });

  }else {
    await RateLimit.create({
      api_key: getUser.api_key,
      limit_count: 1
    })

    return Response.json({ data: "True" });
  }
}