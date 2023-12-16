import ProjectsCard from "@/components/ProjectsCard"

const ProjectsList = () => {
    return(
        <ul className="flex flex-wrap justify-between gap-16 max-md:justify-center">    
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
            <ProjectsCard/>
        </ul>
    )
}

export default ProjectsList