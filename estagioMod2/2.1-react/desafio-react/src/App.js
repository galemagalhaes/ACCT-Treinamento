import React, { useState } from 'react'
import './App.css';

function App() {

  let verificacao = true;  
  const [momentoDaConsulta, setMomentoDaConsulta] = useState(Date());
  const [myVariable, setMyVariable] = useState("");
  const [contNumero, setcontNumero] = useState([]); 

  function clicou() {
    setMyVariable("Hello World!")
    setMomentoDaConsulta(Date())
    do {
       if (contNumero.length >= 10) 
       {
         setcontNumero(contNumero.splice((0), Number.MAX_VALUE));
       }
      
      const rand = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      if (!contNumero.includes(rand)) {
        setcontNumero([...contNumero, rand]);
         verificacao = false;
      } else {
        verificacao = true
      }
    } while (verificacao);
    }

  return (
    <>
      <div className='principal'>
        <span className='imagem'>{ <h1 className={`frase_${contNumero[contNumero.length - 1]}`}>{myVariable}</h1>}</span>
        <div className='div-relogio'><h2 className='txt-relogio'>{momentoDaConsulta}</h2></div>
        <div className='div-botao'><button className='btn-troca-efeito' onClick={() => clicou()}>Trocar</button></div>
      </div>
    </>
  );
}

export default App;