import AboutMe from "./AboutMe"
import Contacts from "./Contacts"
import MyProjects from "./MyProjects"

const HomeSections = () => {
    return(
        <main className="w-full flex flex-col items-center">
            <AboutMe/>
            <MyProjects/>
            <Contacts/>
        </main>
    )
}

export default HomeSections