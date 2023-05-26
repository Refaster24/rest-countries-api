import { useState } from 'react'
import moon from '../image/icon-moon.svg'
import sun from '../image/icon-sun.svg'


export default function Header(){
    const [state,setState] = useState(false)

    let icon = moon
    let mode = 'dark mode'

    if(state === false){
        icon = sun
        mode = 'light mode'
        document.documentElement.classList.add('dark')
    } else{
        document.documentElement.classList.remove('dark')
    }


    return(
        <header className="flex justify-between px-14 py-4  bg-white dark:bg-[hsl(209,23%,22%)] max-sm:px-4">
            <h1 className='text-3xl max-sm:text-xl'>Where in the world?</h1>
            <button onClick={()=>setState(!state)}>
                <img src={icon} alt={mode} className='inline pr-2'/>
                <span>{mode}</span>
            </button>
        </header>
    )
}