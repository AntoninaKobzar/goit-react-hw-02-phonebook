import { Component } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', },
      { id: 'id-2', name: 'Hermione Kline', },
      { id: 'id-3', name: 'Eden Clements', },
      { id: 'id-4', name: 'Annie Copeland', },
    ],
  };
  
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
