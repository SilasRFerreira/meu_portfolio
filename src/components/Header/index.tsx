import Link from "next/link"

const Header = () => {
    return(
        <header className="h-20 w-full flex items-center justify-center bg-black text-white">
            <div className="w-11/12 lg:w-4/5 flex justify-between">
                <h1 className="text-xl font-bold">Meu Portfólio</h1>
                <nav className="space-x-8">
                    <Link href={"/"} className="text-base font-bold">Home</Link>
                    <Link href={"#about"} className="text-base font-medium">Sobre mim</Link>
                    <Link href={"#projects"} className="text-base font-medium">Projetos</Link>
                    <Link href={"#contacts"} className="text-base font-medium">Contatos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header