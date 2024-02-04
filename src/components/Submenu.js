import React, { useContext, useEffect } from 'react'
import { StripeContext } from './StripeContext'

const Submenu = () => {
  let {subMenuData,setSubMenuData,subMenuStatus}=useContext(StripeContext)

  let {page,links}=subMenuData
  useEffect(()=>
  {
    console.log("For God Sake Please Deliver It",subMenuData)
  },[subMenuData])

  console.log("Man I am an anti Natalist",subMenuStatus)
  return (
    <section style={{gridTemplateColumns:"1fr 1fr"}} className={`${subMenuStatus?"absolute top-[70px] left-[50%] hidden md:w-[70%] md:h-[180px] translate-x-[-50%] z-50 bg-slate-700 md:grid items-center px-20 text-white rounded-lg":'hidden'}`}>
      {links.map((items)=>
      {
        let {label,icon,url}=items
        return (
          <p className='capitalize flex items-center'>
            <span className='mr-2'>{icon}</span>
            {label}
          </p>
        );
      })}
    </section>
  );
}


export default Submenu