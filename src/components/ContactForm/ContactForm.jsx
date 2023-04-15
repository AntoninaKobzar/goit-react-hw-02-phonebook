import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import css from '../ContactForm/ContactForm.module.css';


class ContactForm extends Component{
    state = { name:'',};
    
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value, });
    };
    handleSubmit = event => {
        event.preventDefault();
        const contact = {
            id: uuidv4(),
            name: this.state.name,
        };
        // this.props.onSubmit(contact);
        // this.resetForm();
    };

    render(){
    return (
        <form className={css.form} onSubmit={this.handleSubmit}>
            <label>
                <p  className={css.form__label}>Name</p>
                <input className={css.form__input} type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required>
                </input>
            </label>
            <button type="submit" className={css.form__button}>Add contact</button>
        </form>
    );
}
}


export default ContactForm;