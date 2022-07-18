// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {questions} from '../../../data/questions'
import { OneQ } from '../../../types/onequestion';



type Data = OneQ


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {id} =req.query;
    const question=questions[id as keyof typeof questions];
    if(req.method=='GET'&& question){

        res.status(200).json(question)
    }else{
        res.status(400).json(question)
    }

    }