import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import styles from './ContactForm.module.css'; 

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 karakter')
      .max(50, 'Maksimum 50 karakter')
      .required('Zorunlu'),
    number: Yup.string().required('Zorunlu'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label}>
          Name:
          <Field name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.label}>
          Number:
          <Field name="number" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>

        <button type="submit" className={styles.submitBtn}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
