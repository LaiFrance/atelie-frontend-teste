import React from 'react'
import { Button, Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import logocampanhaheader from '../../asserts/logocampanhaheader.svg'
import clouds from '../../asserts/clouds.png'
import './styles.css'

function Frame() {
  return (
    <div className="frameContainer">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
          lg={5}
          xl={4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Item
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={logocampanhaheader} alt="logo-campanha" />
            <div
              className="buttonsgroup"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '60px',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                href="/login"
                style={{
                  width: '150px',
                  marginRight: '20px',
                  color: '#FFFFFF',
                  marginBottom: '10px', // Adicionado para adicionar espaço entre os botões quando eles quebram a linha
                }} // cor da fonte branca
              >
                Login
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="/register"
                style={{
                  width: '150px',
                  marginRight: '20px',
                  color: '#FFFFFF',
                  marginBottom: '10px', // Adicionado para adicionar espaço entre os botões quando eles quebram a linha
                }} // cor da fonte branca
              >
                Cadastre-se
              </Button>
            </div>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          lg={7}
          xl={8}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Item>
            <img src={clouds} alt="clouds" />
          </Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default Frame
