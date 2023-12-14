import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactsCard = () => {
    return(
        <li>
            <FontAwesomeIcon icon={faWhatsapp} className="h-12"/>
            <div>
                <h3>Nome do aplicativo</h3>
                <p>Descrição de como fazer o contato</p>
                <p>Criar link para contato direto</p>
            </div>
        </li>
    )
}

export default ContactsCard