import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
    if (req.method === 'POST') {
        const {body} = req;
        const developercoupon = await prisma.developerCoupons.create({data: JSON.parse(body)});
        res.json(developercoupon);
    } 
}