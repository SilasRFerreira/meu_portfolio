import Image from "next/image"
import profile from "../../../public/perfil.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <footer>
            <div>
                <Image src={profile} alt={"Foto de perfil"} className="h-12 w-12"/>
                <div>
                    <h3>Obrigado!</h3>
                    <p>Siga-me nas mídias sociais e vamos conversar</p>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faGithub} size="sm" className="h-12"/>
                <FontAwesomeIcon icon={faLinkedin} className="h-12" />
            </div>
        </footer>
    )
}

export default Footer