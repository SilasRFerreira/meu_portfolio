import Link from "next/link"

const AboutMe = () => {
    return(
        <section>
            <div>
                <img src="" alt="profile picture" />
                <h3>Olá, meu nome é Silas</h3>
            </div>
            <div>
                <h2>Eu adoro criar e desenvolver projetos</h2>
                <h3>Descubra aqui os meus projetos e as tecnologias que domino</h3>
                <div>
                    <Link href={""}>Veja os projetos</Link>
                    <img src="" alt="link to github" />
                </div>
            </div>
            <div>
                <p>Colocar Ícones das Tecnologias com o link para as docs, se possivel</p>
            </div>
        </section>
    )
}

export default AboutMe