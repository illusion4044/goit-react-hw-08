import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import css from '../HomePage/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Phonebook{' '}
        </h1>
        <p className={css.description}>
        Welcome to the Contact Book App! This application allows you to manage your contacts. You can register, log in, and add, view, or delete contacts.
        </p>
      </div>
    </>
  );
}
