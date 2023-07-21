import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Turn as Hamburger, Turn } from 'hamburger-react'
import Image from 'next/image';
import Logo from '@/public/logo.png'
const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true)
  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState(false)

  const changeBg = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBg)
  }, [])
  
  const handleNav = () => {
    setNav(!nav);
  };
  const links = [
    {
      label: "HOME",
      path: "/",
      pname: "home"
    },
    {
      label: "EVENTS",
      path: "/events",
      pname: "events"
    },
    {
      label: "TEAM",
      path: "/team",
      pname: "team"
    },
    {
      label: "CONTACT",
      path: "/contact",
      pname: "contact"
    },
    {
      label: "QOTD",
      path: "/qotd",
      pname: "qotd"
    },
    {
      label: "BLOG",
      path: "/blog",
      pname: "blog"
    }
  ]


  return (
    <div
    className={navbar ? 'left-0 top-0 pt-2 w-full z-10 backdrop-blur-lg sm:backdrop-blur-xl bg-white/50   ease-in duration-300  pb-3  sticky   bg-opacity-50   transition-all' : ' sticky  left-0 top-0 pt-2  w-full z-10 ease-in  duration-300  pb-5 transition-all'}

      // className='flex justify-center items-center  px-4 h-20'
    >
      <div className='max-w-5xl m-auto flex justify-between items-center'>
        <Link href='/' className="mr-10">
          <Image src={Logo} alt="logo" className='w-64'></Image>
        </Link>
        <ul className='hidden sm:flex font-bold bg-white shadow-nav backdrop-filter backdrop-blur-sm bg-opacity-60 p-2 rounded-xl'>
          {links.map(({label , path}) => (
 <ul key={label}> 
              <li className='px-4  text-sm'>
              <Link href={path} key={""} className={`${router.pathname === path ? 'text-pm-color  border-pm-color border-b-2 rounded-sm ' : 'hover:text-black transition-all text-pm-color'} `} >{label }</Link>
              </li>
            </ul>
          ))}
          </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className='block  mr-10 sm:hidden z-10'>
          {nav ? (
            // <AiOutlineClose size={24} className='cursor-pointer'/>
            <div>
              <button className='cursor-pointer'><Turn/></button>
              
            </div>
          ) : (
            <div>
              <button className='cursor-pointer' onClick={toggle}><Turn/></button>
              <span className={`menu ${isOpen ? 'cross' : 'hamburger'}`}></span>
            </div>
            
          )}
        </div>
        {/* Mobile Menu */}
        {/* <div
          className={
            nav
              ? 'sm:hidden absolute min-h-[100vh] top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-700 dark:bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-[100vh] bg-gra dark:bg-black text-center ease-in duration-300'
          }
        > */}
          <div
          className={
            nav
              ? 'sm:hidden absolute min-h-[100vh] top-0 left-0 right-0 bottom-0 flex justify-center m items-center  h-screen bg-gray-200 dark:text-white text-black dark:bg-black text-center transition-all ease-in duration-300'
              : 'max-w-[80%] flex justify-between items-center sm:hidden bg-black absolute top-0 left-0 right-10 transition-all dark:text-white text-black'
            }
        >
          <ul className={
            nav
              ? 'sm:hidden'
              : 'hidden sm:hidden'
          }>
          {links.map(({label , path, pname}) => (
            <ul key={path}>
              <li className='p-4 text-lg dark:text-white text-black'>
              <Link href={path} key={pname} className={`${router.pathname === path ? 'text-pm-color ' : ' text-black'}`} onClick={toggle} onBlur={hide} onFocus={show}>{label}</Link>

              </li>
            </ul>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;