import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
