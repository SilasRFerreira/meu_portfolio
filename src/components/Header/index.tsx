'use client'

import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [menu, setMenu] = useState('hidden')    
    
    const transition = () => {
        menu === 'hidden' ? setMenu('absolute') : setMenu('hidden')
    }
    
    console.log(menu)

    return(
        <header className="h-20 w-full flex items-center justify-center bg-black text-white">
            <div className="w-11/12 lg:w-4/5 flex justify-between items-center">
                <h1 className="text-xl font-bold">Meu Portfólio</h1>
                <div className="h-[100%] flex items-center relative max-sm:hidden">
                    <FontAwesomeIcon icon={faBars} className="w-10 h-10 sm:hidden" onClick={() => transition()}/>
                    <nav className={`space-x-8 flex`}>                        
                        <Link href={"#about"} className="text-base font-medium max-sm:border-white max-sm:border-2 max-sm:border-solid max-sm:p-0.5 max-sm:px-4 max-sm:bg-black">Sobre mim</Link>
                        <Link href={"#projects"} className="text-base font-medium max-sm:border-white max-sm:border-2 max-sm:border-solid max-sm:p-0.5 max-sm:px-4 max-sm:bg-black">Projetos</Link>
                        <Link href={"#contacts"} className="text-base font-medium max-sm:border-white max-sm:border-2 max-sm:border-solid max-sm:p-0.5 max-sm:px-4 max-sm:bg-black">Contatos</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header