import { CSVLink } from "react-csv";
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";

function App() {

  const [quaRifa, setQuarifa] = useState(100)

  const quaFolha = 10
  const quadDivi = quaRifa / quaFolha

  const array = []  
  const novoArray = []
  
  for (let i = 1; i <= quaRifa; i++) {  
      
    let str = "" + i
    let pad = "0000"
   str = pad.substring(0, pad.length - str.length) + str
    array.push([str])}


  for (var i = 0; i < array.length; i = i + quadDivi) {
    novoArray.push(array.slice(i, i + quadDivi))
  }

  
  const arrayfinal = []
  function chama (val){
        novoArray.forEach((a)=>{
          arrayfinal.push(a[val])
          
        })
  }

  for(let i = 0; i < quadDivi; i++){   chama(i)  }


  arrayfinal.unshift(["0000"])

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }))
  
    const classes = useStyles();
  
  return (
    
  <div className="App">
    
    <form className={classes.root} noValidate autoComplete="off">
    <h1>Rifa</h1>
    <TextField id="outlined-basic" label="Quantas Rifas?" variant="outlined" value={quaRifa} type="number" onChange={(e)=>{setQuarifa(e.target.value)}}/>
    <TextField id="outlined-basic" label="Quantas por folha?" variant="outlined" />
    
      <CSVLink
  data={arrayfinal}
  filename={`Rifa${quaRifa}unidades.csv`}
  className="btn btn-primary"
  target="_blank"
  separator={";"}
  enclosingCharacter={``}
>
  Download me
</CSVLink>
</form>
    </div>
  );
}

export default App;
