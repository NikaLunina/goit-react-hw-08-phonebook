import { FormContact} from 'components/FormContact/FormContact';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import backgroundimg from 'images/backgroundimg.jpg'

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div style={{ backgroundImage: `url(${backgroundimg})` }}>
        <div>
          <div>
            <FormContact/>
          </div>
          <div>
            <Filter />
            <ContactsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;