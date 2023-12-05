// App.js
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Frame from '../../components/Header/Frame'
import Grid from '@mui/material/Grid'
import LoginForm from '../../components/Forms/LoginForm'

function LoginPage() {
  return (
    <div>
      <Frame />
      <Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default LoginPage
