import { Link } from 'react-router-dom';



export const NotFound = () => {
  return (
    <main>
      <div > 
        <p>
          Oops...this page not found.
          <Link to="/"> Home</Link>
        </p>
      </div>
    </main>
  );
};

