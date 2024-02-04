import React from 'react'
import { useState } from 'react'
import { useContext,createContext } from 'react'


let StripeContext=createContext("")

let StripeProvider=({children})=>
{
    let [sidebarStatus,setSidebarStatus]=useState(false)
    let [subMenuStatus,setSubMenuStatus]=useState(false)
    let [subMenuData,setSubMenuData]=useState({page:"",links:[]})

    let openSidebar=()=>
    {
        setSidebarStatus(true)
    }
    let closeSidebar=()=>
    {
        setSidebarStatus(false)
    }
    let openSubmenu=()=>
    {
        setSubMenuStatus(true)
    }
    let closeSubmenu=()=>
    {
        setSubMenuStatus(false)
    }
    return <StripeContext.Provider value={{sidebarStatus,subMenuStatus,subMenuData,setSubMenuData,openSidebar,closeSidebar,openSubmenu,closeSubmenu}}>
        {children}
    </StripeContext.Provider>
}



export {StripeContext,StripeProvider}