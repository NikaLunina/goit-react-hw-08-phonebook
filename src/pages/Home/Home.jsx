import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import css from './Home.module.css'


const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.container}>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div > 
        {isLoggedIn ? (
          <h2>
            Go to
            <Link to="/contacts"> Contacts</Link>
          </h2>
        ) : (
          <p className={css.text}>
           
Welcome to the app! Here you can save contacts to your phone book and search for a contact by name.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;