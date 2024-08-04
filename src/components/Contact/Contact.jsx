import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <div className={css.contactDetails}>
        <span className={css.contactName}>{name}</span>
        <span className={css.contactNumber}>{number}</span>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
