import { Formik } from 'formik';
import {Forma, Input, Error, Button, Label, Title} from '../ContactForm/ContactForm.styled';
import { logIn } from 'redux/authOperations';
import { useDispatch } from 'react-redux';
const initialValues = {
  email: '',
  password: '',
}

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
    resetForm();
  };

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}>
           <Forma autoComplete="off">
           <Title>Log in</Title>
                <Label htmlFor="email">
                Email
                    <Input
                            type="email" name="email" required />

                <Error name="email" component="p" />
                </Label>
                <Label htmlFor="password">
                Password
                    <Input
                             type="password" name="password" required />

                <Error name="password" component="p" />
                </Label>
                <Button type="submit">Log in</Button>
            </Forma>
        </Formik>
  );
};