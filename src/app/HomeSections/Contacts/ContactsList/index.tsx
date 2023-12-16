import ContactsCard from "@/components/ContactsCard"
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactsList = () => {
    return(
        <ul className="flex flex-col space-y-12 max-w-sm">
            <ContactsCard 
                icon={faWhatsapp} 
                href="https://wa.me/5521968383002"
                text="Vamos criar juntos? Envie uma mensagem!"
            />
            <ContactsCard 
                icon={faLinkedin} 
                href={'https://www.linkedin.com/in/silas-ferreira-1b4552101/'}
                text="Me envie um email"
            />
            <ContactsCard 
                icon={faSquareEnvelope} 
                href={'mailto: silasrferreira@gmail.com'}
                name={'email'}
                text="Venha conhecer meu linkedIn e vamos nos conectar"
            />
        </ul>
    )
}
export default ContactsList