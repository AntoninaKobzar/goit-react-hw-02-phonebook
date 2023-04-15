import css from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = ({contacts}) => {
    return (
        <ul className={css.list}>
            {contacts?.map(contact => (
                <ContactItem contact={contact}
                key={contact.id}/>
            ))}
        </ul>
    );
};

export default ContactList;