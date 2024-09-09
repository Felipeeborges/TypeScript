import Card from "@/components/Card"


// Criando uma lista de produtos
const produtos = [
  {
    produto: 'Mouse',
    valor: 10.9,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'Teclado',
    valor: 150.9,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'Monitor',
    valor: 1058.9,
    desconto: 0,
    disponivel: true
  },
  {
    produto: 'Mac',
    valor: 1780.9,
    desconto: 0,
    disponivel: false
  },
]

// Função que calcula o valor com desconto subtraindo o desconto do valor original
function calcDesc(v: number, d: number) {
  return v - d
}

// Função que calcula o valor com desconto subtraindo o desconto do valor original
function calcDesc2(v: number, d: number) {
  return v - (d / 2)
}

export default function produtosPagina() {
  return (
    <div className='flex justify-center gap-3'>
      {
        produtos.map((e: any) => { // Criando um map para mapear os produtos existentes na lista produtos
          if (e.disponivel) {
            return (
              <Card produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={e.funcao}></Card>
            )
          }
        })
      }
    </div>
  )
}