import ProjectsCard from "@/components/ProjectsCard"

const ProjectsList = () => {
    return(
        <ul className="flex flex-wrap justify-between gap-16 max-md:justify-center">    
            <ProjectsCard 
                title={'KenzieHub'} 
                languages={`HTML, JavaScript, CSS, React`}
                description={'Esse projeto trata de um sistema de cadastro, login e gerenciamento de perfil'}
                git="https://github.com/SilasRFerreira/KenzieHub"
                link="https://kenzie-hub-self-phi.vercel.app/register"
            />     
            <ProjectsCard 
                title="NuKenzie"
                languages="`HTML, JavaScript, CSS, React"
                description="Traz um sistema para a gestão de contas. Útil para controle de gastos"
                git="https://github.com/SilasRFerreira/NuKenzie"
                link="https://nu-kenzie-lake-seven.vercel.app/"
            />       
            <ProjectsCard 
                title="BurguerKenzie"
                languages="`HTML, JavaScript, CSS, React"
                description="Site responsável por receber, armazenar o pedido e gerar a fatura de uma hamburgueria"
                git="https://github.com/SilasRFerreira/Hamburgueria"
                link="https://hamburgueria-da-kenzie-xi-umber.vercel.app/"
            />  
        </ul>
    )
}

export default ProjectsList