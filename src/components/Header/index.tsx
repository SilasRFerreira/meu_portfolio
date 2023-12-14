import Link from "next/link"

const Header = () => {
    return(
        <header>
            <div>
                <h1>Meu Portfólio</h1>
                <nav>
                    <Link href={"/"}>Home</Link>
                    <Link href={"#about"}>Sobre mim</Link>
                    <Link href={"#projects"}>Projetos</Link>
                    <Link href={"#contacts"}>Contatos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header