import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { HashLoader } from "react-spinners";

function FormCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categoria");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar("categoria", categoria, setCategoria);
        alert("Categoria Atualizada com sucesso!");
      } catch (error: any) {
        alert("Erro ao atualizar Categoria!");
      }
    } else {
      try {
        await cadastrar("categoria", categoria, setCategoria);
        alert("Categoria Cadastrada com sucesso!");
      } catch (error: any) {
        alert("Erro ao cadastrar categoria!");
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <section className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Digite a Categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <input
            type="text"
            placeholder="Descreva a Categoria"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-lg  bg-cyan-400 hover:bg-sky-700 transition-all 
                duration-300 active:bg-sky-400 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <HashLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </section>
  );
}

export default FormCategoria;
