import type { NextApiRequest, NextApiResponse } from 'next'

import { convertStringToObject, parseDateUniversal } from '../../../utils/date_time'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = _req
    const { id } = _req.query

    if (method == 'GET') {
      const response = await fetch(`${process.env.API_URL}items/${id}/`)
      const items = await response.json()
      res.status(200).json(items)
    } else if (method == 'PUT') {
      const params = {};
      ['title', 'owner', 'date_delivered', 'is_delivered'].map(field => {
        if (_req.body[field] != undefined) {
          params[field] = _req.body[field]
        }
      })
      if (params.date_delivered != undefined) {
        params.date_delivered = parseDateUniversal(convertStringToObject(params.date_delivered, 'DD/MM/YYYY'))
      }
      console.log(params)

      const response = await fetch(`${process.env.API_URL}items/${id}/`, {
        method: "PUT",
        body: JSON.stringify(params),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
      const item = await response.json()
      res.status(200).json(item)
    } else {
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (e) {
    res.status(400).json({
      error: e
    })
  }
}
