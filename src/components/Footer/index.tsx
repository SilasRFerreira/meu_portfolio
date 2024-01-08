import Image from "next/image"
import profile from "../../../public/perfil.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <footer className="w-full flex items-center justify-center bg-black text-white">
            <div className="my-14 w-11/12 lg:w-4/5 flex flex-wrap justify-between max-sm:justify-center gap-8">                
                <div className="flex flex-wrap justify-center items-center space-x-4 max-w-lg gap-6">
                    <Image src={profile} alt={"Foto de perfil"} className="h-12 w-12 rounded-full"/>
                    <div className="max-sm:text-center">
                        <h3>Obrigado!</h3>
                        <p>Siga-me nas mídias sociais e vamos conversar</p>
                    </div>
                </div>
                <div className="flex space-x-8 w-32 justify-between">
                    <a href="https://github.com/SilasRFerreira" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="sm" className="h-12 hover:h-14"/>
                    </a>
                    <a href="https://www.linkedin.com/in/silas-ferreira-1b4552101/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="h-12 hover:h-14"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer