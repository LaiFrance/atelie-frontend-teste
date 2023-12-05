import * as React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from '@mui/material'
import Axios from 'axios'
import { useState } from 'react'
import BasicModal from '../Modal/BasicModal'
import { formContainerStyle, fieldStyle } from './style.css/LoginForm.styles'

const LoginSchema = Yup.object().shape({
  tax_id: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
})

function LoginForm() {
  const [open, setOpen] = useState(false)

  const changeProp = () => {
    setOpen(true)
  }

  return (
    <>
      <BasicModal open={open} setOpen={setOpen} />
      <Formik
        initialValues={{
          tax_id: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          Axios.post(
            'http://localhost:5000/login',
            values,
          )
            .then((response) => {
              if (response.status === 201 && response.data.length > 0) {
                changeProp()
              } else {
                alert('CPF ou senha incorretos')
              }
            })
            .catch((error) => {
              console.log(error.response)
            })
        }}
      >
        {({ errors, touched }) => (
          <Form style={formContainerStyle}>
            <h1>Login</h1>

            <Field
              style={fieldStyle}
              variant="standard"
              name="tax_id"
              as={TextField}
              label="Digite seu CPF"
              error={touched.tax_id && Boolean(errors.tax_id)}
              helperText={touched.tax_id && errors.tax_id}
              fullWidth
              margin="normal"
            />

            <Field
              style={fieldStyle}
              variant="standard"
              name="password"
              as={TextField}
              label="Digite sua senha"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' , marginBottom: '20px'}}
            >
              Entrar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
