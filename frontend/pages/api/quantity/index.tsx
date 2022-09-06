import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const { method } = _req;

        if (method == 'POST') {
            const isDelivered = _req.body.href == '/recovered' ? 'true' : 'false';
            const response = await fetch(`${process.env.API_URL}items?is_delivered=${isDelivered}`)
            const items = await response.json()
            res.status(200).json({ quantity: items.count });
        } else {
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    } catch (e) {
        res.status(400).json({
            quantity: 0,
            error: e
        })
    }
}
