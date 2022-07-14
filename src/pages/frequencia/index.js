import axios from "axios";
import { useState } from "react"




export default function Index(){
const[texto, setTexto] = useState('');
const[caractere, setCaractere] =useState('');
const[ resposta, setResposta] = useState('');

     async function verificarFreq(){
     const resp= await   axios.get(`http://localhost:5000/dia2/freqcaractere/${texto}/${caractere}`)
     setResposta(resp.data.freq);
    }

    return(
        <main>
            <h1>
               Frêquencia</h1>
               <div>
                    Texto:  <input type='text' value={texto} onChange={e => setTexto(e.target.value)} />
               </div>
               <div>
                    Caractere: <input type='text' value={caractere} onChange={e => setCaractere(e.target.value)}/>
               </div>
               <div>
                    <button onClick={verificarFreq}> Verificar Frêquencia </button>
               </div>
               <div>
                  Frêquencia: {resposta}
               </div>
        </main>
    )
}