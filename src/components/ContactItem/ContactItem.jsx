import css from './ContactItem.module.css';

const ContactItem = ({ contact,onDeleteContact}) => {
    return (
        <li className={css.item}>
            <span className={css.item}>{contact.name}: </span>
            <a href={`tel:${contact.number}`} className={css.number}>{contact.number}</a>
            <button
                type='button'
                className={css.button}
                onClick={()=>onDeleteContact(contact.id)}>Delete</button>
        </li>
    );
};
export default ContactItem;