import React from "react";
import AnsweredCard from "../../components/AnsweredCard";
import UnansweredCard from "../../components/UnansweredCard";
import { QuestionContext } from "../../context/QuestionContext";
import { OneQ } from "../../types/onequestion";



const Details = (props : OneQuestion) => {
   const {questions} = React.useContext(QuestionContext);
   const answered=questions.includes(props.question.id)

    return (
      <>
      {answered?<AnsweredCard question={props.question}/> : <UnansweredCard question={props.question}/>}
      </>  
    );
  }

export default Details;  


export const getStaticProps = async (context:Context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/api/questions/' + id);
    const data = await res.json();
  
    return {
      props: { question: data }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/questions');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = Object.keys(data).map(question => {
      return {
        params: { id: question.toString() }
      }
    })
    return {
      paths,
      fallback: false
    }
  }
  type OneQuestion={
    question:OneQ
  }

  type Context={
    params:{
        id:string
    }
  }
  
