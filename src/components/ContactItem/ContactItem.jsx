import css from './ContactItem.module.css';

const ContactItem = ({ contact}) => {
    return (
        <li>
            <span className={css.item}>{contact.name} </span>
        </li>
    );
};
export default ContactItem;