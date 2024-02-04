import React from 'react'
import { useContext } from 'react';
import { LiaTimesSolid } from "react-icons/lia";
import { StripeContext } from './StripeContext';
import sublinks from '../utils/data';


const Sidebar = () => {
    let {sidebarStatus,closeSidebar}=useContext(StripeContext)
  return (
    <section className={`${sidebarStatus?"w-[100vw] h-screen bg-white absolute top-0 left-0 text-black lg:hidden z-40":"hidden"}`}>
      <div className="contain w-[90vw] mx-auto my-4">
        <header className='flex w-[100%] justify-between items-center'>
          <h2 className='text-xl text-blue-500 font-semibold tracking-wide'>Stripe</h2>
          <button className='text-xl' onClick={closeSidebar}>
            <LiaTimesSolid /> 
          </button>
        </header>
        <ul className="links mt-16">
            {sublinks.map((main,idx1)=>
            {
                let {page,links}=main
                return (
                  <article key={idx1} className='mt-6'>
                    <h2 className="text-purple-600 capitalize">{page}</h2>
                    <div
                      className="sub-links grid"
                      style={{ gridTemplateColumns: "1fr 1fr" }}
                    >
                      {links.map((sub, idx2) => {
                        let { label, icon, url } = sub;
                        return (
                          <aside key={idx2} className="text-black mt-4 flex items-center capitalize text-xl">
                            {icon} <sub className='ml-2'>{label}</sub>
                          </aside>
                        );
                      })}
                    </div>
                  </article>
                );
            })}
        </ul>
      </div>
    </section>
  );
}

export default Sidebar