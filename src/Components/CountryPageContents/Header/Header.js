import {FaSun,FaMoon} from 'react-icons/fa'
import {useGlobalContext } from '../../../context'
function Header() {
    const {Light, setLight} = useGlobalContext()
    return (
        <div className='flex justify-between md:px-10 px-6 shadow-xl   items-center h-16 md:h-20 bg-slate-800 dark:bg-slate-600 text-gray-100'>
            <div><h1 className='text-xl md:text-2xl   font-serif'>Country App</h1></div>      
            <div className='text-xl md:text-2xl lg:text-3xl mt-1 cursor-pointer hover:scale-90' onClick={()=>setLight(!Light)}> {Light?<FaMoon/>: <FaSun/>}</div>
        </div>
    )
}

export default Header
