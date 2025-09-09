import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarcategoria() {
    setIsLoading(true);
    try {
      await deletar(`/categoria/${id}`);
      alert("Categoria deletada com sucesso!");
    } catch (error: any) {
      alert("Erro ao deletar categoria!");
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categoria");
  }

  return (
    <section className="flex justify-center pt-10">
      <div className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-3xl text-center ">Deletar Categoria</h1>
        <div
          className="flex flex-col rounded justify-center border border-slate-300
            bg-gradient-to-b from-sky-300/20 to-sky-100 shadow-lg"
        >
          <header className="py-2 px-6 font-semibold flex items-center border-b border-slate-300">
            <h2 className="text-lg"> {categoria.nome}</h2>
          </header>

          <div className="flex-1 flex flex-col justify-between">
            <div className="">
              <p className="p-2 flex-1">{categoria.descricao}</p>
            </div>

            <div className="flex px-4 justify-end">
              <button
                className="bg-cyan-600 rounded px-4 text-white py-2 m-2
                        hover:bg-cyan-300 hover:text-black hover:transition-colors duration-300 font-semibold active:bg-cyan-800"
                onClick={retornar}
              >
                Não
              </button>

              <button
                className="bg-red-600 rounded px-4 text-white py-2 m-2 
                        hover:bg-red-300 hover:text-black hover:transition-colors duration-300 font-semibold active:bg-red-800"
                onClick={deletarcategoria}
              >
                {isLoading ? (
                  <ClipLoader color="#ffffff" size={24} />
                ) : (
                  <span>Sim</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeletarCategoria;
