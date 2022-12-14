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
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        
      }}
    >
      <div>
      <MainTitle title='Phonebook'/>
      <ContactForm />
      </div>
      <div>
      <SectionTitle title="Contacts"/>
      <Filter />
      
      <ContactList />
      </div>
    
    </div>
  );
}