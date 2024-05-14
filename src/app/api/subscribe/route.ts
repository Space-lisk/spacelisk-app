import connectDB from "../../../../db/db";
import { User } from "../../../../db/models/User";

export async function POST(req: Request) {
    await connectDB();

    const { wallet_address, package_id } = await req.json();

    if (!wallet_address) {
        return Response.json({ message: "Invalid input field" }, {
            status: 422
        })
    }

    await User.findOne({
        wallet_address: wallet_address
    }).updateOne({
        package_id: package_id
    })

    return Response.json({ data: {message: "Subscriptiuon successful"} })
}
