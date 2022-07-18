import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActions } from '@mui/material';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';




export default function AddQuestion() {
    const router = useRouter();  

  const [optionone, setOptionone] = useState<string>("");
  const [optiontwo, setOptiontwo] = useState<string>("");
  const onOptiononeChange = (e: any) => setOptionone(e.target.value);
  const onOptiontwoChange = (e: any) => setOptiontwo(e.target.value);
  const handleSubmit = async() => {
   const respose= await fetch('./api/questions',{
    method: 'POST',
    body: JSON.stringify({
        optionOne:optionone,
        optionTwo:optiontwo,
        author :user?.nickname
    }),
    headers:{
        'Content-Type': 'application/json'
    }
   })

   const data=await respose.json();
   console.log(data);
    if(data){
        router.push('/');
    }
  }

  const { user } = useUser();

  return (
    <Grid container justifyContent="center">
    <Card sx={{ maxWidth: 450, marginTop:5, padding:5, backgroundColor:'#e9eef7'}}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Ask Would You Rather
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <TextField
            onChange={onOptiononeChange}
            value={optionone}
            label={"Option One"} //optional
            />
          <br/> <br/>
           <strong>OR</strong> 
          <br/> <br/>
          <TextField
            onChange={onOptiontwoChange}
            value={optiontwo}
            label={"Option Two"} //optional
           />
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={optionone==""||optiontwo==""} onClick={handleSubmit} size="large">Submit</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}
