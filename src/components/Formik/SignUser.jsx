import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"



const SignUser = () => {
    const formik = useFormik({
        initialValues:{
            username: "",
            email: "",
            password: ""
        },
        validationSchema:{
            username: yup.string(),
            email: yup.email("Must be a valid email "),
            password: yup.string().min(6, "password too short").max(8, "password too long")
        },
        onSubmit : (values)=>{
            console.log(values)
        }
    })
     
  return (
    <div>
        <form onSubmit={formik.handleSubmit} action="">
            <h1 className="text-primary text-center">Sign up</h1>
            <div className="form-group">
                <label htmlFor="" className=''>Username</label>
                <input onChange={formik.handleChange} type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="" className=''>Username</label>
                <input onChange={formik.handleChange} type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="" className=''>Username</label>
                <input onChange={formik.handleChange} type="password" className="form-control" />
            </div>
        </form>
    </div>
  )
}

export default SignUser