// Importando os componentes Topo e Card
import Topo from "@/components/Topo"
import Card from "@/components/Card"

// Declarando uma constante e uma variável com valores de nome e canal
const nome = 'Felipe Borges'
let canal = 'Curso Type Script'

// Função que retorna o valor da constante 'nome'
function retnome() {
  return nome
}

// Função que calcula o valor com desconto subtraindo o desconto do valor original
function calcDesc(v:number, d:number) {
  return v - d
}

  // Função que calcula o valor com desconto subtraindo o desconto do valor original
function calcDesc2(v:number, d:number) {
  return v - (d/2)
}

// Componente principal da página inicial
export default function Home() {
  return (
    <div>
      <Topo/>
      <div style={stilo}>
        <div>{retnome()}</div> 
        <div>{canal}</div>
      </div>

      <div className='flex justify-center gap-3'>

        <Card produto={'Mouse'} valor={50.00} desconto={0.2} funcao={calcDesc} />
        <Card produto={'Teclado'} valor={10.00} desconto={0.5} funcao={calcDesc} />
        <Card produto={'Tecla'} valor={5.00} desconto={0.9} funcao={calcDesc} />  
        <Card produto={'CPU'} valor={795.00} desconto={10.2} funcao={calcDesc} />
        <Card produto={'Monitor'} valor={480.00} desconto={0.7} funcao={calcDesc} />
        <Card produto={'Mouse Pad'} valor={45.00} desconto={0} funcao={calcDesc} />
        <Card produto={'Iphone'} valor={5000.00} desconto={8.9} funcao={calcDesc2} />  
        <Card produto={'Celular'} valor={4512.00} desconto={12.2} funcao={calcDesc2} />    
      </div>    
    </div>
  )// Componente principal da página inicial
}

// Objeto de estilo para a div que contém nome e canal
const stilo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '40px',
  gap: '500px'  // Adiciona espaçamento horizontal de 500px entre os elementos
}
