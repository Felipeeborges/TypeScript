// Definição da interface para as props do componente Card
interface CardProps {
    produto: string
    valor: number
    desconto: number
    funcao: any // Função para calcular o preço com desconto
}

// Definição do componente Card
export default function Card(props: CardProps) {
    return (
        // Div que estiliza o Card com classes Tailwind CSS - Utlizando JS dentro do Tailwind
        <div className={`flex flex-col border-4 ${props.desconto>0?"border-red-700": "border-blue-700 "} rounded-sm p-1`}> 
            <div>Produto: {props.produto}</div>
            <div>Valor: {props.valor}</div>
            {props.desconto>0&&(  // Operação resumo
                <div>
                    <div>Desconto: {props.desconto}</div>
                    <div>Preço venda: {props.funcao(props.valor, props.desconto)}</div>
                </div>
            )}
        </div>
    )
}
