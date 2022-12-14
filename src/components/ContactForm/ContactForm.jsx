import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { addContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik} from "formik"
import {Forma, Input, Error, Button, Label} from './ContactForm.styled'

const initialValues = {
    name: '',
    number: '',
}

const shema = yup.object().shape({
    name: yup.string().required(),
});

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        if (
            contacts.items.some(
              contact =>
                contact.name.toLowerCase() === values.name.toLowerCase().trim()
            )
          ) {
            Notify.failure('This contact is already in the phonebook)');
          }
          if (
            !contacts.items.some(
              contact =>
                contact.name.toLowerCase() === values.name.toLowerCase().trim()
            )
          ) {
            dispatch(addContacts(values));
            Notify.success('Contact saved successfully)');
          }
        resetForm();
    };
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={shema}
        onSubmit={handleSubmit}
        >
           <Forma autoComplete="off">
                <Label htmlFor="name">
                    Name
                    <Input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                />

                <Error name="name" component="p" />
                </Label>
                <Label htmlFor="number">
                    Number
                    <Input
                             type="tel"
                             name="number"
                             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                             required
                />

                <Error name="number" component="p" />
                </Label>
                <Button type="submit">Add contact</Button>
            </Forma>
        </Formik>
   
    )
}