import React, { useEffect, useRef } from 'react'
import { MdOutlineSegment } from "react-icons/md";
import sublinks from '../utils/data';
import { useContext } from 'react';
import { StripeContext } from './StripeContext';


const Navbar = () => {
    let {
      sidebarStatus,
      openSidebar,
      openSubmenu,
      closeSubmenu,
      subMenuData,
      setSubMenuData,
    } = useContext(StripeContext);
    let hovering=useRef({})

    useEffect(()=>
    {
      console.log(subMenuData)
    },[subMenuData])


    let handleHover=(e)=>
    {
       let element=e.target.textContent
       if(element)
       {
          openSubmenu();
          let data=sublinks.find((items)=>
          {
            return items.page.toLowerCase()===element.toLowerCase()
          })
          setSubMenuData(data)
       }
    }

  return (
    <section className="w-[90vw] max-w-[1170px] mx-auto flex justify-between items-center h-[70px]">
      <header className="flex items-center w-[100%] justify-between lg:w-auto">
        <h2 className="text-2xl font-semibold">Stripe</h2>
        <button className="lg:hidden text-2xl" onClick={openSidebar}>
          <MdOutlineSegment />
        </button>
      </header>
      <ul className="ml-10 hidden cursor-pointer lg:flex">
        <li
          ref={hovering}
          onMouseOver={handleHover}
          className="hover-links mx-4 capitalize"
        >
          Products
        </li>
        <li
          ref={hovering}
          onMouseOver={handleHover}
          className="hover-links mx-4 capitalize"
        >
          Developers
        </li>
        <li
          ref={hovering}
          onMouseOver={handleHover}
          className="hover-links mx-4 capitalize"
        >
          Company
        </li>
      </ul>
      <footer className="hidden lg:flex">
        <button className="px-3 py-1 bg-slate-700 rounded-md text-sm">
          Sign Up
        </button>
        <button className="px-3 py-1 bg-slate-700 ml-2 rounded-md text-sm">
          Sign In
        </button>
      </footer>
    </section>
  );
}

export default Navbar