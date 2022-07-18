import type { NextApiRequest, NextApiResponse } from 'next'
import {question} from '../../../data/ni6ok3ym7mf1p33lnez'
import { OneQ } from '../../../types/onequestion'




type Data = OneQ


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(question)
}