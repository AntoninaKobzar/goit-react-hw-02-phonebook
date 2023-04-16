import css from './ContactItem.module.css';

const ContactItem = ({ contact,onDeleteContact}) => {
    return (
        <li>
            <span className={css.item}>{contact.name}: </span>
            <a href={`tel:${contact.number}`}>{contact.number}</a>
            <button
                type='button'
                onClick={()=>onDeleteContact(contact.id)}>Delete</button>
        </li>
    );
};
export default ContactItem;