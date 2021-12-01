// import { useEffect, useState } from "react";

import "./App.css";
// import api from "./api";


function App() {
  // const [pass, setPass] = useState("");

  const pass = "Sherlock";

  // const getPassword = async () => {
  //   let result = await api.get('');
  //   if(result){
  //     console.log(result)
  //   }
    
  //   setPass(result)
  // }

  return (
    <div className="container">
      <div className="box">
        <div className="generator">
          <h1 className="title">Secrypter</h1>
          <span>Clique em Gerar para receber sua nova senha modafoca</span>
          <button className="btn-gerador">Gerar</button>
        </div>
        <div className="area">
          <input type="text" readOnly value={pass}/>
          <span>
            <button className="btn-copiar">Copiar</button>
          </span>
        </div>
      </div>
      <h3 className="footer">Feito com amor e ódio por Leonzera</h3>
    </div>
  );
}

export default App;
