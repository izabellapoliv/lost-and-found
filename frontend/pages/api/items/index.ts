import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const { method } = _req;

        if (method == 'GET') {
            const response = await fetch(`${process.env.API_URL}items/`)
            const items = await response.json()
            res.status(200).json(items.results)
        } else if (method == 'POST') {
            const response = await fetch(`${process.env.API_URL}items/`, {
                method: "POST",
                body: JSON.stringify({
                    title: _req.body.title,
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
            const item = await response.json()
            res.status(201).json(item)
        } else {
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
        }
    } catch (e) {
        res.status(400).json({
            error: e
        })
    }
}
