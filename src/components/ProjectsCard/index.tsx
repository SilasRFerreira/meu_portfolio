import Image from "next/image"
import github from "../../../public/github.svg"
import share from "../../../public/share.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faShare } from "@fortawesome/free-solid-svg-icons"

const ProjectsCard = () => {
    return(
        <li className="w-[310px] flex flex-col gap-4">
            <h2 className="text-xl font-bold">Tittle</h2>
            <small className="text-gray-2">Linguagens:</small>
            <p className="text-gray-2">Descrição do projeto contendo as informações sobre finalidade da aplicação e 
                como está organizado o repositório... </p>
            <div className="flex flex-wrap justify-between">
                <div className="flex gap-4 items-center">
                    <FontAwesomeIcon icon={faGithub} size="sm" className="h-4"/>
                    <p>Código no github</p>
                </div>
                <div className="flex gap-4 items-center">
                    <FontAwesomeIcon icon={faShare} size="sm" className="h-4"/>
                    <p>Aplicação</p>
                </div>
            </div>
        </li>
    )
}

export default ProjectsCard