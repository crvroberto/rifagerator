import { CSVLink } from "react-csv";
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button , } from '@material-ui/core';
import { useState } from "react";

function App() {

  const [quaRifa, setQuarifa] = useState(100)
  const [quaFolha, setQuafolha] = useState(10)
  const [down, setDown] = useState([])

  
  const arrayfinal =[]
  const array = []
  const novoArray = []

  function gerator() {


    for (let i = 1; i <= quaRifa; i++) {

      let str = "" + i
      let pad = "0000"
      str = pad.substring(0, pad.length - str.length) + str
      array.push([str])
    }


    for (var i = 0; i < array.length; i = i + quaRifa / quaFolha) {
      novoArray.push(array.slice(i, i + quaRifa / quaFolha))
    }



    function chama(val) {
      novoArray.forEach((a) => {
        arrayfinal.push(a[val])

      })
    }

    for (let i = 0; i < quaRifa / quaFolha; i++) { chama(i) }


    arrayfinal.unshift(["0000"])
    
    setDown(arrayfinal)



  }

  console.log(down)

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }))

  const classes = useStyles();

  function Download(props) {
    return (
      <CSVLink
        data={down}
        filename={`Rifa${quaRifa}unidades.csv`}
        className="btn btn-secondary"
        target="_blank"
        separator={";"}
        enclosingCharacter={``}

      >
        <Button variant="contained" color="secondary">Download {down.length -1} unidades</Button>
       
      </CSVLink>)
  }
  return (

    <div className="App">

      <div className={classes.root} noValidate autoComplete="off">
        <h1>Rifa - Copiadora Vieira</h1>
        <TextField id="outlined-basic" label="Quantas Rifas?" variant="outlined" value={quaRifa} type="number" onChange={(e) => { setQuarifa(e.target.value) }} />
        <TextField id="outlined-basic" label="Quantas por folha?" variant="outlined" value={quaFolha} type="number" onChange={(e) => { setQuafolha(e.target.value) }} />
        <Button onClick={gerator} variant="contained" color="primary"> Gerar </Button >
      
      </div>
      
      {down.length > 1 ? <Download/> : <div></div>}
    </div>
  );
}

export default App;
