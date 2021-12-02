import { useState } from "react";

import "./App.css";
import api from "./api";


function App() {
  const [pass, setPass] = useState("");
  
  async function getPassword(){
    let result = await api.get('generator');
    if(result){
      setPass(result.data.password)
    }
  }
  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = pass
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
    setPass("Copiado!")
    setTimeout(() => {
      setPass("")
    }, 3000);
  }

  
  return (
    <div className="container">
      <div className="box">
        <div className="generator">
          <h1 className="title">Secrypter</h1>
          <span>Clique em Gerar para receber sua nova senha modafoca</span>
          <button className="btn-gerador" onClick={getPassword}>Gerar</button>
        </div>
        <div className="area">
          <input type="text" readOnly value={pass}/>
          <span>
            <button className="btn-copiar" onClick={copyToClipboard}>Copiar</button>
          </span>
        </div>
      </div>
      <h3 className="footer">Feito com amor e café por Leonzera</h3>
    </div>
  );
}

export default App;
