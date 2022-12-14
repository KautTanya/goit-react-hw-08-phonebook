import { ContactForm } from 'components/ContactForm/ContactForm';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <div
      style={{
        width: '1000px',
        margin: '0 auto',
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <MainTitle />
      <ContactForm />
      <Filter />
      <SectionTitle title="Contacts"/>
        <ContactList />
    
    </div>
  );
}