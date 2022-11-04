import React from "react";

export const FormikBasicPage = () => {
  return (
    <div>
      <h1>Formik Basic Tutorial</h1>
      <form noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />
        <span>First Name is Required</span>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />
        <span>Last Name is Required</span>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <span> Email is Required</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
