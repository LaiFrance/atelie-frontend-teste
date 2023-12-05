import * as React from 'react'
import { Backdrop, Box, Modal, Fade, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: "orange",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModel({ open, setOpen }) {
  const handleClose = () => setOpen(false)

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 100 } }}
    >
      <Fade in={open}>
        <Box
          sx={style}
          style={{
            textAlign: 'center',
            color: 'black',
            backgroundColor: 'orange',
          }}
        >
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: 'center', color: 'black' }}
          >
            Cadastro realizado com sucesso!
          </Typography>
        </Box>
      </Fade>
    </Modal>
  )
}
