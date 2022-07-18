import * as React from 'react';
import Typography from '@mui/material/Typography';
import { User } from '../types/user';
import { useUser } from '@auth0/nextjs-auth0';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Question } from '../types/question';
import QuestionsList from '../components/QuestionsList';
import { QuestionContext } from "../context/QuestionContext";
import { QuestionlistContext } from '../context/QuestionlistContext';
import { UserlistContext } from '../context/UserlistContext';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



type UserProps ={users:User,questions:Question}


export default function Signin( props: UserProps) {
  const { user} = useUser();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const Questions=props.questions;
  const username=user?.nickname ?user.nickname :""; 
  const answeredquestions=Object.keys(Questions).filter((questionid)=> (Questions[questionid].optionOne.votes.includes(username)||
  Questions[questionid].optionTwo.votes.includes(username) ));
  const unansweredquestions=Object.keys(Questions).filter((questionid)=> ( !answeredquestions.includes(questionid) ));

  const {updateQuestions} = React.useContext(QuestionContext);
  const {updateQuestionslist} = React.useContext(QuestionlistContext);
  const {updateUserslist} = React.useContext(UserlistContext);

  React.useEffect(()=>{
    updateQuestions(answeredquestions);
    updateQuestionslist(props.questions);
    updateUserslist(props.users);
    console.log(props.users);
  },[])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Answered Questions"  id="0" />
          <Tab label="UnAnswered Questions" id="1" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
         <QuestionsList questions={props.questions} users={props.users} questionsid={answeredquestions}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuestionsList questions={props.questions} users={props.users} questionsid={unansweredquestions}/>
      </TabPanel>
    </Box>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()

  const res2 = await fetch('http://localhost:3000/api/questions')
  const questions = await res2.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
      questions
    },
  }
}
