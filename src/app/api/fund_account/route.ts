import { NextRequest } from "next/server";
import connectDB from "../../../../db/db";
import { User } from "../../../../db/models/User";
import { UserPaymasterFunding } from "../../../../db/models/UserPaymastrFunding";

export async function GET(request: NextRequest) {
    await connectDB();
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('user')

    const userPaymasterFundings = await UserPaymasterFunding.find({
        wallet_address: query
    })

    return Response.json({ data: userPaymasterFundings });
}

export async function POST(req: Request) {
    await connectDB();

    const { wallet_address, funded_address, amount } = await req.json();

    if (!wallet_address) {
        return Response.json({ message: "Invalid input field" }, {
            status: 422
        })
    }

    const getUser = await User.findOne({
        wallet_address: wallet_address
    });

    if (!getUser) {
        return Response.json({ message: "Invalid user" }, {
            status: 400
        })
    }

    await UserPaymasterFunding.create({
        user_id: getUser.id,
        wallet_address: wallet_address,
        funded_address: funded_address,
        amount: amount
    });

    return Response.json({ data: { message: "Logged successful" } });
}
