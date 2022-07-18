import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { OneQ } from '../types/onequestion';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


type OneQuestion={
    question:OneQ
  }


export default function UnansweredCard( props: OneQuestion) {



  return (
    <>
    <Grid container justifyContent="center">
    <Card sx={{ maxWidth: 450, marginTop:5, padding:5 }}>
      <Typography variant="h5" component="div">
       Would You Game Using Next.Js
      </Typography>
        <CardMedia
          component="img"
          height="200"
          image={props.question.avatarURL}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.question.author} asked would you rather
        </Typography>
        <FormControl>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={props.question.optionOne.text}
            name="radio-buttons-group"
        >
            <FormControlLabel value={props.question.optionOne.text} control={<Radio />} label={props.question.optionOne.text} />
            <FormControlLabel value={props.question.optionTwo.text} control={<Radio />} label={props.question.optionTwo.text} />
        </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button >Submit Answer</Button>
      </CardActions>
    </Card>
    </Grid>
    </>
  );
}

