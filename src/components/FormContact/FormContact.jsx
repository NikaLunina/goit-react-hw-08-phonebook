import { useState } from 'react';
import css from './FormContact.module.css';
import { useDispatch , useSelector} from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';



export const FormContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();


  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const  formSubmitHandler = () => {
    let newContact = {
      number,
      name,
      id: nanoid(),
    };

    const newName = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
    );

    if (newName) {
      return alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
      
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler();
    setName('');
    setNumber('');
  };


  return (
    <form className={css.form} onSubmit={handleSubmit} >
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
