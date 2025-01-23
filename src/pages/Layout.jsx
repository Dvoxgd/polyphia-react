import { Navbar } from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className='flex items-center flex-col space-y-0'>
        <Outlet />
      </main>
      <footer id='main-footer' className='flex justify-center w-full text-center'>
        <div className="container text-center flex justify-center">
          <p class="m-auto">2024 Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  )
} 