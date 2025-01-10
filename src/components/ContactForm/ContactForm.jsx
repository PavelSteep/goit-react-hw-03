import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    number: Yup.string().required('required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className={`${css.input} ${
                errors.name && touched.name ? css.inputError : ''
              }`}
              placeholder="Enter your name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.error}
            />
          </div>

          <div className={css.fieldWrapper}>
            <label htmlFor="number" className={css.label}>
              Phone
            </label>
            <Field
              id="number"
              name="number"
              type="tel"
              className={`${css.input} ${
                errors.number && touched.number ? css.inputError : ''
              }`}
              placeholder="Enter your phone number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
