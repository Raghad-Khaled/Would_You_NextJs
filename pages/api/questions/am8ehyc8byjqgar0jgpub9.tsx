import type { NextApiRequest, NextApiResponse } from 'next'
import {question} from '../../../data/am8ehyc8byjqgar0jgpub9'
import { OneQ } from '../../../types/onequestion'




type Data = OneQ


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(question)
}