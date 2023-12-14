import Image from "next/image"
import github from "../../../public/github.svg"
import share from "../../../public/share.svg"

const ProjectsCard = () => {
    return(
        <li>
            <h2>Tittle</h2>
            <small>Linguagens</small>
            <p>Descrição do projeto contendo as informações sobre finalidade da aplicação e 
                como está organizado o repositório... </p>
            <div>
                <div>
                    <Image src={github} alt={"logo do github"}/>
                    <p>Código no github</p>
                </div>
                <div>
                    <Image src={share} alt={"Imagem de uma seta indicando o endereço on-line da aplicação"}/>
                    <p>Aplicação</p>
                </div>
            </div>
        </li>
    )
}

export default ProjectsCard