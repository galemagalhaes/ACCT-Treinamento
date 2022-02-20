import './App.css';

function App() {
  let rows = [];
  var numero;
  for (let i = 0; i < 10; i++) {
    //rows.push(<h1 id={`${i + 1}`} className={`frase_${i}`}>Hello World!</h1>);    
    rows.push(i);    
  }
  function clicar() {
    console.log(rows)
    numero = rows[4];
    console.log(numero)
  }
  return (
    <div className="principal">
      <span>
        <h1 id={numero} className={`frase_${numero}`}>Hello World!</h1>
      </span>
      <button className="btn-troca-efeito" onClick={()=>{clicar()}}>Novo layout</button>
    </div>   
  );
}

export default App;
