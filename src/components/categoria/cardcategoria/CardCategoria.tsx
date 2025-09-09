import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <article className="pt-10 ">
      <div
        className="flex flex-col rounded-2xl justify-between border border-slate-300
            bg-gradient-to-b from-sky-300/20 to-sky-100 shadow-lg hover:shadow-2xl 
            hover:transition-all duration-300 hover:scale-[1.01]"
      >
        <header className="py-2 px-6 font-semibold flex  items-center border-b border-slate-300">
          <h2 className="text-lg"> {categoria.nome}</h2>
        </header>

        <div className="flex-1 flex flex-col justify-between">
          <div className="">
            <p className="p-2 flex-1">{categoria.descricao}</p>
          </div>

          <div className="flex px-4 justify-end">
            <Link to={`/editarcategoria/${categoria.id}`}>
              <button
                className="bg-cyan-600 rounded px-4 text-white py-2 m-2
                        hover:bg-cyan-300 hover:text-black hover:transition-colors duration-300 font-semibold active:bg-cyan-800"
              >
                Editar
              </button>
            </Link>

            <Link to={`/deletarcategoria/${categoria.id}`}>
              <button
                className="bg-red-600 rounded px-4 text-white py-2 m-2 
                        hover:bg-red-300 hover:text-black hover:transition-colors duration-300 font-semibold active:bg-red-800"
              >
                Deletar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardCategoria;
