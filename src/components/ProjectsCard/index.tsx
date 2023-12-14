import Image from "next/image"
import github from "../../../public/github.svg"
import share from "../../../public/share.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faShare } from "@fortawesome/free-solid-svg-icons"

const ProjectsCard = () => {
    return(
        <li>
            <h2>Tittle</h2>
            <small>Linguagens</small>
            <p>Descrição do projeto contendo as informações sobre finalidade da aplicação e 
                como está organizado o repositório... </p>
            <div>
                <div>
                    <FontAwesomeIcon icon={faGithub} size="sm" className="h-4"/>
                    <p>Código no github</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faShare} size="sm" className="h-4"/>
                    <p>Aplicação</p>
                </div>
            </div>
        </li>
    )
}

export default ProjectsCard