import { FormContact} from 'components/FormContact/FormContact';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Container } from './Contacts.styled';


const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <h1>Phonebook</h1>
      </Helmet>
      
            <FormContact/>
            <h2>Contacts</h2>
            <Filter />
            <ContactsList />
       
    </Container>
  );
};

export default Contacts;