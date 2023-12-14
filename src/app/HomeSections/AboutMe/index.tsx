import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGithub, faHtml5, faJs, faPython } from "@fortawesome/free-brands-svg-icons"
import { faNode } from "@fortawesome/free-brands-svg-icons/faNode"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import Image from "next/image"
import profile from "../../../../public/perfil.jpg"


const AboutMe = () => {
    return(
        <section id="about" >
            <div>
                <Image src={profile} alt={"Imagem de perfil"} className="h-12 w-12"/>
                <h3>Olá, meu nome é Silas</h3>                           
            </div>            
            <div>
                <h2>Eu adoro criar e desenvolver projetos</h2>
                <h3>Descubra aqui os meus projetos e as tecnologias que domino</h3>
                <div>
                    <Link href={""}>Veja os projetos</Link>
                    <FontAwesomeIcon icon={faGithub} size="sm" className="h-8"/>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faHtml5} size="sm" className="h-12"/>
                <FontAwesomeIcon icon={faCss3Alt} size="sm" className="h-12"/>
                <FontAwesomeIcon icon={faJs} size="sm" className="h-12"/>
                <FontAwesomeIcon icon={faNode} size="sm" className="h-12"/>
                <FontAwesomeIcon icon={faReact} size="sm" className="h-12"/>
                <FontAwesomeIcon icon={faPython} size="sm" className="h-12"/>
            </div>
        </section>
    )
}

export default AboutMe