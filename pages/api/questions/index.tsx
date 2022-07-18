// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {questions} from '../../../data/questions'
import { Question } from '../../../types/question'



type Data = Question


function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method=='GET'){
        res.status(200).json(questions)
    }else if(req.method=='POST'){
        const author=req.body.author? req.body.author:'';
        const optionOneText=req.body.optionOne? req.body.optionOne :'';
        const optionTwoText=req.body.optionTwo? req.body.optionTwo :'';
        const idgen=generateUID()
        const newQuestion={
            id: idgen,
            author: author,
            timestamp: Date.now(),
            optionOne: {
              votes: [],
              text: optionOneText,
            },
            optionTwo: {
              votes: [],
              text: optionTwoText,
            }
        }
        //questions={...questions,[idgen]:newQuestion}
        res.status(201).json(questions)
    }
}