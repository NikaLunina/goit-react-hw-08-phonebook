import css from './ContactsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};