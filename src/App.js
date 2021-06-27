import { CSVLink } from "react-csv";

import './App.css';


function App() {

  const quaRifa = 300
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

  return (
    
    
  <div className="App">
    <h1>Rifa</h1>
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
   
    </div>
  );
}

export default App;
