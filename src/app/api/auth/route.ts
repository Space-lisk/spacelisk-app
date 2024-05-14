import connectDB from "../../../../db/db"
import { AccessToken } from "../../../../db/models/AccessToken";
import { Package } from "../../../../db/models/Package";
import { User } from "../../../../db/models/User";
import { addSecondsToDate, generateRandomString } from "../../../../utils/helpers";

export async function POST(req: Request) {
    await connectDB();

    const { wallet_address } = await req.json();

    if (!wallet_address) {
        return Response.json({ message: "Invalid input field" }, {
            status: 422
        })
    }

    const getUser = await User.findOne({
        wallet_address: wallet_address
    });

    if (getUser) {

        await AccessToken.find({
            user_id:getUser.id
        }).deleteMany();

        const tkn = generateRandomString(50);

        AccessToken.create({
            user_id: getUser.id,
            token: tkn,
            expiresAt: addSecondsToDate(60 * 60 * 24),
            scopes: ["user"]
        });

        return Response.json({ data: {user: getUser, token: tkn} })
    } else {
        const pkg = await Package.findOne({
            name: "free"
        });

        if (!pkg) {
            return Response.json({ message: "No package yet. try again later" }, {
                status: 400
            })
        }

        const user = await User.create({
            wallet_address: wallet_address,
            api_key: generateRandomString(),
            package: pkg.id
        });

        const tkn = generateRandomString(50);

        AccessToken.create({
            user_id: user.id,
            token: tkn,
            expiresAt: addSecondsToDate(60 * 60 * 24),
            scopes: ["user"]
        });

        return Response.json({ data: {user, token: tkn} })
    }
}