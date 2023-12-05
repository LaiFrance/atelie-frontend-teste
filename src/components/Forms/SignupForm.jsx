import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Axios from "axios";
import React from "react";
import { useState } from "react";
import BasicModal from "../Modal/BasicModal";
import { Grid } from "@mui/material";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  tax_id: Yup.string().required("Required").min(11, "Invalid CPF"),
  password: Yup.string().required("Required"),
  password_confirmation: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  segment: Yup.string().required("Required"),
});

function SignupForm() {
  const [open, setOpen] = useState(false);

  const changeProp = () => {
    setOpen(true);
  };

  // function SenhasNaoConferem( password, password_confirmation) {
  //   if (password !== password_confirmation) {
  //     return
  //     alert ('senhas não conferem')
  //   }
  // }

  return (
    <>
      <BasicModal open={open} setOpen={setOpen} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          tax_id: "",
          password: "",
          password_confirmation: "",
          company: "",
          segment: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
          Axios.post(
            "https://api.teste-frontend.ateliedepropaganda.com.br/v1/register",
            {
              name: values.name,
              email: values.email,
              tax_id: values.tax_id,
              password: values.password,
              password_confirmation: values.password_confirmation,
              company: values.company,
              segment: values.segment,
            }
          )
            .then((response) => {
              response.status === 200 ? changeProp() : console.log("nao foi");
            })
            .catch((error) => {
              console.log(error.response);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              fontStyle: "white",
              display: "flex",
              color: "white",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              padding: "20px",
              alignSelf: "center",
              backgroundImage:
                "url(https://bitbucket.org/ateliedepropaganda/atelie-frontend-teste/raw/c0262b0b69248c521eb2de860705e71e50962035/-%20ASSETS/background-marrom.png)",
              backgroundSize: "cover",
            }}
          >
            <h1>Cadastre-se</h1>
            <h4>
              {" "}
              Preencha os campos abaixo para validar sua participação <br />
              na campanha e concorrer a prêmios.
            </h4>

            <Grid container columns={12} paddingX={20} spacing={4} alignItems="center">
              <Grid item md={12} xs={12}>
                <Field
                  style={{ width: "100%" }}
                  variant="standard"
                  name="name"
                  as={TextField}
                  label="Name"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  margin="normal"
                  placeholder= "Nome"
                  InputProps={{
                    style: { backgroundColor: ""}
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Field
                  style={{ width: "100%" }}
                  variant="standard"
                  name="tax_id"
                  as={TextField}
                  label="CPF"
                  error={touched.tax_id && Boolean(errors.tax_id)}
                  helperText={touched.tax_id && errors.tax_id}
                  margin="normal"
                  placeholder= "000.000.000-00"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Field
                  style={{ width: "100%" }}
                  variant="standard"
                  name="email"
                  as={TextField}
                  label="Email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  margin="normal"
                  placeholder= "E-mail"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Field
                  style={{ width: "100%" }}
                  variant="standard"
                  name="password"
                  as={TextField}
                  label="Password"
                  type="password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  margin="normal"
                  placeholder= "Digite a sua senha"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Field
                  style={{ width: "100%" }}
                  variant="standard"
                  name="password_confirmation"
                  as={TextField}
                  label="Confirm Password"
                  type="password"
                  error={
                    touched.password_confirmation &&
                    Boolean(errors.password_confirmation)
                  }
                  helperText={
                    touched.password_confirmation &&
                    errors.password_confirmation
                  }
                  margin="normal"
                  placeholder= "Confirme a sua senha"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Field
                  style={{ width: "100%", borderBottomColor: "red" }}
                  variant="standard"
                  name="company"
                  as={TextField}
                  label="Company"
                  error={touched.company && Boolean(errors.company)}
                  helperText={touched.company && errors.company}
                  margin="normal"
                  placeholder= "Empresa"
                  InputProps={{
                    style: {
                      color: "red"
                    }
                  }}
                  InputLabel = {{
                    style: {
                      color: "red"
                      }
                      
                  }}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <InputLabel id="demo-simple-select-standard-label"> Classificação</InputLabel>
                <Field
                  style={{ width: "100%"}}
                  variant="standard"
                  name="segment"
                  as={Select}
                  label= "Cargo"
                  error={touched.segment && Boolean(errors.segment)}
                  helperText={touched.segment && errors.segment}
                  margin="normal"
                  placeholder= "Escolha sua categoria"
                >
                  <MenuItem value="Gerente">Gerente</MenuItem>
                  <MenuItem value="Funcionário">Distribuidor</MenuItem>
                  <MenuItem value="Revendedor">Revendedor</MenuItem>
                </Field>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignupForm;
