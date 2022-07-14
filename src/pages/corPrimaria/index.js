import axios  from "axios"
import { useState } from "react"




export default function Index(){
const [cor, setCor] = useState('');
const [resposta, setResposta] = useState('');

  async function verificarCorPrimaria(){
    const  resp = await axios.get('http://localhost:5000/dia2/corPrimaria/'   + cor);
   
   if (resp.data.primaria === true) {
        setResposta('SIM!');
   } else {
    setResposta('NÃO!');
   }
 }
    return(
        <main>
            <h1>
                Cor Primária</h1>
            <div>
                Cor:  <input type='text'value={cor} onChange={e => setCor(e.target.value)}  />
            </div>
            <div>
                <button  onClick={verificarCorPrimaria}>  Verificar </button>
            </div>
            <div>
                 É  cor Primária?  {resposta}
            </div>
        </main>
    )
}