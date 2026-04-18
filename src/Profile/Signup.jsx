import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from "yup"
import loginstyle from "./login.module.css"
import { Link } from 'react-router-dom'

// ✅ Validation Schema
const schema = yup.object({
  username: yup.string().required("REQUIRED"),

  email: yup
    .string()
    .email("Invalid email")
    .required("REQUIRED"),

  password: yup
    .string()
    .required("REQUIRED")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Must include capital letter, number & special character"
    ),

  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("REQUIRED"),
});

export default function Signup() {
  return (
    <>
      <div className={loginstyle.loginbox}>
        <h1 style={{ textAlign: "center", color: "rgb(6, 165, 228)" }}>
          Create an Account
        </h1>

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={schema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const res = await fetch("https://ecommerce-backend-saz6.onrender.com/auth/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: values.username,
                  email: values.email,
                  password: values.password,
                }),
              });

              const data = await res.json();

              if (!res.ok) {
                throw new Error(data.message || "Signup failed");
              }

              alert("Signup successful ✅");
              resetForm();

            } catch (err) {
              console.error(err);
              alert(err.message);
            }
          }}
        >
          <Form>
            {/* Username */}
            <label>User Name:</label>
            <Field type="text" name="username" className={loginstyle.input} />
            <ErrorMessage name="username" component="span" className={loginstyle.error} />

            {/* Email */}
            <label>Email:</label>
            <Field type="email" name="email" className={loginstyle.input} />
            <ErrorMessage name="email" component="span" className={loginstyle.error} />

            {/* Password */}
            <label>Password:</label>
            <Field type="password" name="password" className={loginstyle.input} />
            <ErrorMessage name="password" component="span" className={loginstyle.error} />

            {/* Confirm Password */}
            <label>Confirm Password:</label>
            <Field type="password" name="confirm_password" className={loginstyle.input} />
            <ErrorMessage name="confirm_password" component="span" className={loginstyle.error} />

            <br /><br />

            <button type="submit">Sign-up</button>

            <br /><br />
          </Form>
        </Formik>

        <p>
          If you already have an account <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
}