import Image from "next/image"
import github from "../../../public/github.svg"
import kinkedin from "../../../public/linkedin_footer.svg"

const Footer = () => {
    return(
        <footer>
            <div>
                <img src="" alt="profile picture" />
                <div>
                    <h3>Obrigado!</h3>
                    <p>Siga-me nas mídias sociais e vamos conversar</p>
                </div>
            </div>
            <div>
                <Image src={github} alt="" />
                <Image src={kinkedin} alt=""/>
            </div>
        </footer>
    )
}

export default Footer