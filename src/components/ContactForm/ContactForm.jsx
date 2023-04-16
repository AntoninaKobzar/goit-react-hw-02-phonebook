import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';


class ContactForm extends Component {
    // static propTypes = {
    //     onSubmit: PropTypes.func.isRequired,
    // };
    state = {
        name: '',
        number: '',
    };
    
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value,
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        const contact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        };

        this.props.onSubmit(contact);
        this.resetForm();
    };
    resetForm = () => {
        this.setState({
            id: '',
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label>
                    <p className={css.form__label}>Name</p>
                    <input
                        className={css.form__input}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. 
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                />
                </label>
                <label>
                    Number
                    <input
                        className={css.form__input}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit" className={css.form__button}>Add contact</button>
            </form>
        );
    }
}


export default ContactForm;