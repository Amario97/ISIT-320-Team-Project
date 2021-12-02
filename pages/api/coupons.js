import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
    if (req.method === 'POST') {
        const {body} = req;
        const coupon = await prisma.coupons.create({data: JSON.parse(body)});
        res.json(coupon);
    } 
}