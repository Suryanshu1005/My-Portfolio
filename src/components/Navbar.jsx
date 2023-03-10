import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, settoggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX}w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} style={{ width: '100%' }}
    >
      <div className='w-full flex justify-between items-center 
             max-w-7xl mx-auto'>
        <Link
          to="/My-Portfolio"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className='w-14
                  h-14 object-contain' />
          <p className='text-red-700 text-[30px] sm:text-[25px] justify-start
                  font-bold cursor-pointer flex'> Suryanshu Tiwari </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((Link) => (
            <li key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className=" w-[28px] h-[28px] object-contain 
                    cursor-pointer"
            onClick={() => settoggle(!toggle)}></img>
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute
                    top-20 right-0 mx-4 my-2 min-w-[140px]
                    z-10 rounded-xl`}>
            <ul className=" list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((Link) => (
                <li key={Link.id}
                  className={`${active === Link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    settoggle(!toggle)
                    setActive(Link.title)
                  }}>
                  <a href={`
                      #${Link.id}`}>{Link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar