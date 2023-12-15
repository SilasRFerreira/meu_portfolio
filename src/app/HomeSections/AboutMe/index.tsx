import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGithub, faHtml5, faJs, faPython } from "@fortawesome/free-brands-svg-icons"
import { faNode } from "@fortawesome/free-brands-svg-icons/faNode"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import Image from "next/image"
import profile from "../../../../public/perfil.jpg"


const AboutMe = () => {
    return(
        <section id="about" className="flex items-center justify-center w-full bg-gray-1">
            <div className="my-14 items-center justify-center w-11/12 lg:w-4/5 space-y-10">            
                <div className="flex space-x-10 items-center">
                    <Image src={profile} alt={"Imagem de perfil"} className="h-12 w-12 rounded-full"/>
                    <h3 className="font-normal">Olá, meu nome é Silas</h3>                           
                </div>            
                <div className="space-y-10">
                    <h2 className="text-4xl font-bold">Eu <span className="text-primary-blue">adoro </span> 
                    criar e <span className="text-primary-blue">desenvolver</span> projetos</h2>
                    <h3 className="text-gray-2">Descubra aqui os meus projetos e as tecnologias que domino</h3>
                    <div className="flex space-x-4">
                        <div className="bg-primary-blue h-12 w-40 flex items-center justify-center rounded-lg">
                            <a href="https://github.com/SilasRFerreira" target="_blank" className="font-medium">Veja meus projetos</a>
                        </div>
                        <FontAwesomeIcon icon={faGithub} size="sm" className="h-12 w-12"/>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <FontAwesomeIcon icon={faHtml5} size="sm" className="h-12"/>
                    <FontAwesomeIcon icon={faCss3Alt} size="sm" className="h-12"/>
                    <FontAwesomeIcon icon={faJs} size="sm" className="h-12"/>
                    <FontAwesomeIcon icon={faNode} size="sm" className="h-12"/>
                    <FontAwesomeIcon icon={faReact} size="sm" className="h-12"/>
                    <FontAwesomeIcon icon={faPython} size="sm" className="h-12"/>
                </div>
            </div>
        </section>
    )
}

export default AboutMe