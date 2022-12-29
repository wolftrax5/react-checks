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
          terms: false,
          jobType: "",
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
          terms: yup.boolean().oneOf([true], "Debe aceptar las condciones"),
          jobType: yup
            .string()
            .notOneOf(["it-jnr"], "esta opccion es no permitida")
            .required("Es Requerido"),
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

            <label>
              <Field name="terms" type="checkbox" />
              Terms & Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <label htmlFor="jobType">Email</label>
            <Field name="jobType" as="select">
              <option value=""></option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jnr">IT Junior</option>
              <option value="full-stack">Full Stack</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
