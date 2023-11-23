import React, { useState } from 'react';
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "../../public/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { title: "Camisas", path: "/" },
    { title: "Chaquetas y Abrigos", path: "/" },
    { title: "Pantalones", path: "/" },
    { title: "Camisas y Blusas Formales", path: "/" },
    { title: "Vestidos", path: "/" },
    { title: "Ropa Deportiva", path: "/" },
    { title: "Accesorios y Materiales", path: "/" },
  ]

  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
      <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
        <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block' />

        {/* logo */}
        <a href="/"><img src={logo} alt="" /></a>
        
        {/* account and shopping btn */}
        <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
          <a href="/" className='flex items-center gap-2'><FaUser /> Cuenta</a>
          <a href="/" className='flex items-center gap-2'><FaShoppingBag/> Compras</a>
        </div>

        {/* navbar for sm devices */}
        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? <FaTimes className='w-5 h-5 text-Black' /> : <FaBars className='w-5 h-5 text-Black' />
            }
          </button>
        </div>
      </nav>

      <hr />
      
      {/* category items */}
      <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-Black hidden'>
          {
            navItems.map(({ title, path }) => (
              <li key={title} className='hover:text-orange-500'>
                <Link to="/">{title}</Link>
              </li>
            ))
          }
        </ul>
      </div>

      {/* only mobile menu items */}
      <div>
        <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
          {
            navItems.map(({ title, path }) => (
              <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                <Link to="/">{title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      
    </header>
  )
}

export default Navbar