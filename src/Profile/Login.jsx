import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from "yup"
import React, { useEffect } from 'react'
import loginstyle from "./login.module.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const schema = yup.object({
  email: yup.string().email("Invaild email").required("REQUIRED"),
  password: yup.string().required("REQUIRED")
})
export default function Login() {

const navigate=useNavigate()

  const login = async (values) => {
    try {
      const res = await axios.post(
        "https://ecommerce-backend-saz6.onrender.com/auth/login",values
      );
if(res.data.token)
{
  localStorage.setItem("token",res.data.token)
  localStorage.setItem("Username",res.data.user.username)
}
      // console.log(res.data);
    //  navigate("/homepage")
    window.location.href = "/homepage";


    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <>
      <div className={loginstyle.loginbox}>
        <h1 style={{ textAlign: "center", color: "rgb(6, 165, 228) " }}>Login</h1>

        <Formik initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={login}
        >
          <Form>
            <label htmlFor="email">Email: </label>
            <Field type="email" name="email" className={loginstyle.input} />
            <ErrorMessage name='email' component="span" className={loginstyle.error} />
            <label htmlFor="password">Password: </label>
            <Field type="password" name="password" className={loginstyle.input} />
            <ErrorMessage name='password' component="span" className={loginstyle.error} /><br /><br />
        <button type='submit'>Login</button><br /><br />

          </Form>

        </Formik>
        <p>If you are a new User <Link to="/signup">Sign Up</Link></p>
      </div>
    </>
  )
}
