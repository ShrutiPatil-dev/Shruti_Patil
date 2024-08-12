import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import logo from '../assets/logo.png'

const linkClasses =
  "block py-2 pr-4 pl-3  text-white border-gray-100 lg:border-0 hover:text-teal-400 lg:p-0 ";

const NavLink = ({ to, onClick, children }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className={`${linkClasses}`}
    >
      {children}
    </Link>
  </li>
);



export default function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen)

  const toggleclose = () => setIsOpen(false)

  

    
   

  return (
    <header>
     <nav className="border-gray-200 backdrop-blur-lg lg:px-20 py-3 lg:py-4  fixed top-0 w-full z-50 px-16">
     <div className=" bg-transparent flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
              <img className="w-10" src={logo} alt="SP"/>
          </Link>
          <div className="flex items-center p-2 ml-1 text-sm text-white  hover:transition-all duration-75" onClick={props.handleThemeSwitcher}>
            
            {(props.theme === 'dark')? <FaMoon size={25}/>:<IoIosSunny size={30}/>}         
            
          </div>
          
          <div className="inline-flex items-center p-2 ml-1 text-sm text-white lg:hidden" onClick={toggleOpen}>
            
            <FaBars size={30}/>              
           
         </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className=" lg:bg-transparent bg-primary lg:dark:bg-transparent dark:bg-blue-800 transition ease-in-out  text-center absolute lg:static w-full  right-0 top-0 py-16 lg:py-0 flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <RxCross2  className="absolute right-20 top-5 lg:hidden"size={30} onClick={toggleOpen}/>
            
            <NavLink to="/"onClick={toggleclose}>
                About
              </NavLink>
              <NavLink to="/skills"  onClick={toggleclose}>
                Skills
              </NavLink>
              <NavLink to="/projects" onClick={toggleclose}>
                Projects
              </NavLink>
              <NavLink to="/contact"  onClick={toggleclose}>
                Contact
              </NavLink>
            </ul>
          </div>
          
        </div>
      </nav>
    </header>
  );
}