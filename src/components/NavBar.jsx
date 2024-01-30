import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="h-[50%] bg-blanco shadow-lg mt-2 p-2">
        <h2 className='text-xl font-bold'>Navegacion</h2>
      <nav>
        <ul className='flex flex-col'>
            <Link className='my-2 border-b-2 border-blue-500 p-2 hover:bg-blue-500 hover:text-white transition-colors' to={'/'}>Inicio</Link>
            <Link className='my-2 border-b-2 border-green-500 p-2 hover:bg-green-500 hover:text-white transition-colors' to={'/create'}>Crear</Link>
            <Link className='my-2 border-b-2 border-red-500 p-2 hover:bg-red-500 hover:text-white transition-colors' to={'/pending'}>Pendientes</Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
