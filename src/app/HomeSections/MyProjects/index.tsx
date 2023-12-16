import ProjectsList from "./ProjectsList"

const MyProjects = () => {
    return(
        <section id="projects" className="flex items-center justify-center w-full">
            <div className="my-14 items-center justify-center w-11/12 lg:w-4/5 space-y-10">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">Meus projetos</h2>
                    <p className="text-sm">Projetos criados na <span className="text-color-tertiary">Kenzie Academy Brasil</span></p>
                </div>
                <ProjectsList/>
            </div>
        </section>
    )
}

export default MyProjects