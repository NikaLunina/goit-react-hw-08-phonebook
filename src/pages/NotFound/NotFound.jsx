import { Link } from 'react-router-dom';
import backgroundimg from 'images/backgroundimg.jpg'


export const NotFound = () => {
  return (
    <main>
      <div style={{ backgroundImage: `url(${backgroundimg})` }}> 
        <p>
          Oops...this page not found.
          <Link to="/"> Home</Link>
        </p>
      </div>
    </main>
  );
};

