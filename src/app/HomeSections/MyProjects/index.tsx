import ProjectsList from "./ProjectsList"

const MyProjects = () => {
    return(
        <section id="projects">
            <div>
                <h2>Meus projetos</h2>
                <p>Projetos criados na <span>Kenzie Academy Brasil</span></p>
            </div>
            <ProjectsList/>
        </section>
    )
}

export default MyProjects