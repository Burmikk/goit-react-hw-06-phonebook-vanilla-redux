import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import styles from './contactPage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, addFilter, deleteContact } from 'Redux/actions';

// const getFromLocalStorage = () => JSON.parse(localStorage.getItem('contacts'));

const ContactPage = () => {
  // const [contacts, setContacts] = useState(getFromLocalStorage());
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onAddContact = data => {
    const isDublicate = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isDublicate) {
      return alert(`${data.name} is already in contacts`);
    }

    const action = addContacts(data);
    dispatch(action);
  };

  const onAddFilter = e => {
    const { value } = e.target;
    const action = addFilter(value);
    dispatch(action);
  };

  //Функция ниже возвращает либо contacts либо отфильтрованый массив с контактами.
  //Дальше она передается в компонент ContactList который создает разметку искользуя эти данные

  const filterSearch = () => {
    if (!filter) {
      return contacts;
    }
    const newContact = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return newContact;
  };

  const handleRemove = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm addContact={onAddContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={onAddFilter} filterValue={filter} />
        {contacts.length !== 0 && (
          <ContactList filterSearch={filterSearch()} remove={handleRemove} />
        )}
      </div>
    </div>
  );
};

export default ContactPage;

// <ContactList filterSearch={filterSearch()} remove={handleRemove} />;
