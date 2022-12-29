import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";
import { MyCheckbox } from "../components/MyCheckbox";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
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
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="your Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="your Last Name"
            />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="lala@google.com"
              type="email"
            />

            <MyCheckbox name="terms" label="Terms & Conditions" />

            <MySelect name="jobType" label="Job Type">
              <option value=""></option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jnr">IT Junior</option>
              <option value="full-stack">Full Stack</option>
            </MySelect>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
