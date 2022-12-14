import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {Forma, Input, Error, Button, Label, Title} from '../ContactForm/ContactForm.styled';
import { register } from 'redux/authOperations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Forma autoComplete="off">
        <Title>Register</Title>
        <Label htmlFor="name">
          Username
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error name="name" component="p" />
        </Label>
        <Label htmlFor="email">
          Email
          <Input type="text" name="email" required />
          <Error name="email" component="p" />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            type="password"
            name="password"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Not may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error name="password" component="p" />
        </Label>
        <Button type="submit">Register</Button>
      </Forma>
    </Formik>
  );
};