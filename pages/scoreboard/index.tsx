import * as React from 'react';
import UserCard from '../../components/UserCard';
import { UserlistContext } from '../../context/UserlistContext';


export default function ScoreBoard() {

  const {userslist} =React.useContext(UserlistContext);

  return (
    <>
     {
        Object.keys(userslist).map((userid)=>{
            return <UserCard key={userid} user={userslist[userid]}/>
        })
     }
    </>
  );
}

