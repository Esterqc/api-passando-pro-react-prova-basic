import { useState } from "react"

import axios from "axios";


export default function Index(){
    const[qtdInteiras,setQtdInteiras]= useState(0);
    const[qtdMeias,setQtdMeias]= useState(0);
    const[diaSemana,setDiaSemana]= useState('');
    const[nacionalidade,setNacionalidade]= useState('');
    const [total,setTotal] = useState(0);

   async function calcular(){
     const  resp= await axios.post('http://localhost:5000/dia2/ingressocinema',
        {
         qtdInteira:  qtdInteiras,
         qtdMeia:     qtdMeias,
         diaSemana:    diaSemana,
         nacionalidade: nacionalidade
        })
        setTotal(resp.data.total);
    }
    return(
        <main>
            <h1>
               Ingresso
            </h1>
            <div>
                Qtd.Inteiras: <input type='text'  value={qtdInteiras} onChange={ e => setQtdInteiras(Number(e.target.value))}/>
            </div>
            <div>
                Qtd.Meias: <input type='text'  value={qtdMeias} onChange={  e =>setQtdMeias(Number(e.target.value))} />
            </div>
            <div>
                Dia Da Semana: <input type='text'  value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
            </div>
            <div>
                Nacionalidade: <input type='text'value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} /> 
            </div>
            <div>
               <button onClick={calcular}>Calcular</button>
            </div>
            <div>
              O Total é R$ {total}
            </div>
        </main>
    )
}