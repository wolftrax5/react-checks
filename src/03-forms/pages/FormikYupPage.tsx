import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
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
        <input type="text" id="firstName" {...getFieldProps("firstName")} />
        {errors.firstName && touched.firstName && (
          <span className="error-message">{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...getFieldProps("lastName")} />
        {errors.lastName && touched.lastName && (
          <span className="error-message">{errors.lastName}</span>
        )}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...getFieldProps("email")} />
        {errors.email && touched.email && (
          <span className="error-message">{errors.email}</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
