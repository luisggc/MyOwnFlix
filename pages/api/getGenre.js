import { fetchGenre } from "../../api/fetch"

export default async function handler(req, res) {
    const data = await fetchGenre(req.query?.genre, req.query?.page)
    res.status(200).json(data)
  }
  
  
  