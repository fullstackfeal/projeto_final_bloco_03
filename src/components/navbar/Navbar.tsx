import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-cyan-700 text-white flex justify-between p-4">
      <div className="container flex justify-between text-1g mx-8">
        <Link to='/home' className="text-2xl font-bold">FarmVIDA</Link>
        <div className="flex gap-4">
          Produtos 
          <Link to='/categoria' className='hover:underline'>Categorias</Link>
          <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
          Sair
        </div>
      </div>
    </nav>
    
  );
}
export default Navbar