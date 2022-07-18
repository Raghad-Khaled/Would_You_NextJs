import * as React from 'react';
import { User } from '../types/user';
import { Question } from '../types/question';
import AskCard from './AskCard';



type QuestionProps ={ 
questions:Question,
users:User,
questionsid:Array<string>
}

export default function QuestionsList( props: QuestionProps) {


  return (
    <>
    {
        props.questionsid.map((question)=>{
          return <AskCard question={props.questions[question]} authorimg={props.users[props.questions[question].author]?.avatarURL}/>
        })
    }
    </>
  );
}

