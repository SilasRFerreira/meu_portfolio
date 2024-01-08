import ContactsList from "./ContactsList"
import Greetings from "./Greetings"

const Contacts = () => {
    return(
        <section id="contacts" className="flex items-center justify-center w-full">
            <div className="my-14 flex flex-wrap items-center justify-center w-11/12 lg:w-4/5 space-y-10 justify-between">
                <Greetings/>
                <ContactsList/>
            </div>
        </section>
    )
}

export default Contacts