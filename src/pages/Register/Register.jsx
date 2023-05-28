import { RegisterForm } from 'components/RegisterForm/RegisterForm';
const { Helmet } = require('react-helmet');


const Register = ()=> {
  return (
    <div>      
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
export default Register