import type { NextApiRequest, NextApiResponse } from 'next'
import type { Item } from '../../interfaces'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(`${process.env.API_URL}items`)
    const items = await response.json()
    res.status(200).json(items)
}
