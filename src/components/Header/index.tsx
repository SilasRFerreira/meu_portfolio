import Link from "next/link"

const Header = () => {
    return(
        <header>
            <div>
                <h1>Silas</h1>
                <nav>
                    <Link href={""}>Home</Link>
                    <Link href={""}>Projetos</Link>
                    <Link href={""}>Cotntatos</Link>
                    <Link href={""}>Mídias Digitais</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header