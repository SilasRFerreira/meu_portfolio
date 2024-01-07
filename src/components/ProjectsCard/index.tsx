import Image from "next/image"
import github from "../../../public/github.svg"
import share from "../../../public/share.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faShare } from "@fortawesome/free-solid-svg-icons"


interface ProjectProps{
    title: string
    languages: string
    description: string
    git?: string
    link?: string
}

const ProjectsCard = ({title, languages, description, git, link}: ProjectProps) => {
    return(
        <li className="w-[310px] flex flex-col gap-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <small className="text-gray-2">Linguagens: {languages}</small>
            <p className="text-gray-2">{description}</p>
            <div className="flex flex-wrap justify-between">
                <div className="flex gap-4 items-center">
                    <FontAwesomeIcon icon={faGithub} size="sm" className="h-4"/>
                    <p>Código no github</p>
                </div>
                <div className="flex gap-4 items-center">
                    <FontAwesomeIcon icon={faShare} size="sm" className="h-4"/>
                    <a href={link} target="_blank">Aplicação</a>
                </div>
            </div>
        </li>
    )
}

export default ProjectsCard