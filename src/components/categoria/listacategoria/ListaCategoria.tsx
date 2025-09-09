import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { HashLoader } from "react-spinners";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategoria() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);

  async function buscarCategorias() {
    setIsLoading(true);

    await buscar("/categoria", setCategorias);

    setIsLoading(false);
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <HashLoader color="##00FFFF" size={32} />
        </div>
      )}
      <div className="flex justify-center w-full my=4">
        <div className="container flex flex-col">
          {!isLoading && categoria.length === 0 && (
            <p className="text-3xl text-center my-8">
              Nenhuma categoria cadastrada
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;
