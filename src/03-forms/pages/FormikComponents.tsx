import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log("Submit", values);
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: yup.string().required(),
          email: yup
            .string()
            .email("Email no tiene formato valido")
            .required("Email requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
