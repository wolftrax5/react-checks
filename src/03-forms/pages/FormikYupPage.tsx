import React from "react";
import { FormikErrors, useFormik } from "formik";
import * as yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit(values) {
        console.log("values", values);
      },
      validationSchema: yup.object({
        firstName: yup
          .string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("Requerido"),
        lastName: yup.string().required(),
        email: yup
          .string()
          .email("Email no tiene formato valido")
          .required("Email requerido"),
      }),
    });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {errors.firstName && touched.firstName && (
          <span className="error-message">{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {errors.lastName && touched.lastName && (
          <span className="error-message">{errors.lastName}</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (
          <span className="error-message">{errors.email}</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
