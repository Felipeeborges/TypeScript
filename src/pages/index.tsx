// Index Landing Page

import Topo from "@/components/Topo"
import Card from "@/components/Card"

const nome = 'Felaaaaaaas'
let canal = 'Curso Type Script'

function retnome() {
  return nome
}


export default function Home() {
  return (
    <div>
      <Topo/>
      <div style={stilo}>
        <div>{retnome()}</div>
        <div>{canal}</div>
      </div>
      <div className='flex justify-center gap-3'>
      <Card produto={'Mouse'} valor ={50.00} desconto={0.2}/>
      <Card produto={'Teclado'} valor ={10.00} desconto={0.5}/>
      <Card produto={'Tecla'} valor ={5.00} desconto={0.9}/>  
      <Card produto={'CPU'} valor ={795.00} desconto={10.2}/>    
      </div>
    </div>
  );
}

const stilo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '40px',
  gap: '500px'  // Adiciona espaçamento horizontal de 20px entre os elementos
}
