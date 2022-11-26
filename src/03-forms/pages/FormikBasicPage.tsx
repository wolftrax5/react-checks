import React from "react";
import { FormikErrors, useFormik } from "formik";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({
    firstName,
    lastName,
    email,
  }: FormValues): FormikErrors<FormValues> => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = "Required";
    }
    if (!lastName) {
      errors.lastName = "Required";
    }
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit(values) {
        console.log("VAlues", values);
      },
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
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

export default FormikBasicPage;
