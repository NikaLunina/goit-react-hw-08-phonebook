import { Helmet } from 'react-helmet';

import backgroundimg from 'images/backgroundimg.jpg'
import { useAuth } from 'hooks/useAuth';
import { Link } from 'react-router-dom';


const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Contacts App</title>
      </Helmet>
      <div style={{ backgroundImage: `url(${backgroundimg})` }}>
        {isLoggedIn ? (
          <h2>
            Go to
            <Link to="/contacts"> Contacts</Link>
          </h2>
        ) : (
          <p>
           
Welcome to the app! Here you can save contacts to your phone book and search for a contact by name.
          </p>
        )}
      </div>
    </>
  );
};

export default Home;