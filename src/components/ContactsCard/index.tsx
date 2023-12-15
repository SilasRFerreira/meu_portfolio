import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface iContactsCard {
    icon: any
    href: string
    name?: string
    text: string
}

const ContactsCard = ({icon, href, name, text}: iContactsCard) => {
    
    return(
        <li className="flex space-x-6">
            <a href={href} target="_blank" className="self-center">
                <FontAwesomeIcon icon={icon} className="h-12 hover:h-14"/>
            </a>
            <div className="space-y-4">
                {name ? <h3>{name}</h3> : <h3>{icon.iconName}</h3>}
                <p>{text}</p>                
            </div>
        </li>
    )
}

export default ContactsCard