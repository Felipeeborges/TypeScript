import Link from "next/link";

export default function Topo() {
    return (
      <div className="flex justify-between items-center bg-zinc-400 h-10">
        <nav>
          
        <Link href={"/"}>Inicio</Link>
        <Link href={"/produtos/tecnologia"}> Tecnologia</Link>
        <Link href={"/produtos/esportes"}> Esportes</Link>

        </nav>
      </div>
    )
  }