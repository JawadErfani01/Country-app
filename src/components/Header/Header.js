import React from 'react'
import {FaSun,FaMoon} from 'react-icons/fa'
import {useGlobalContext } from '../../context'
function Header() {
    const {Light, setLight} = useGlobalContext ()
    return (
        <div className='flex justify-between  px-10 shadow-xl  pb-4 items-center  h-20 bg-slate-800 dark:bg-slate-600 text-gray-100'>
            <div><h1 className='text-2xl   font-serif'>Country App</h1></div>      
            <div className='text-3xl cursor-pointer hover:scale-90' onClick={()=>setLight(!Light)}> {Light?<FaMoon/>: <FaSun/>}</div>
        </div>
    )
}

export default Header
