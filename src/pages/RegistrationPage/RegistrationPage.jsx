import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
