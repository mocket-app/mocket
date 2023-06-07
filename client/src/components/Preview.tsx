import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Preview = () => {
  const [ loading, setLoading ] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }

  return (
    <>
      <Box 
        sx={{
          flexGrow: 2,
          margin: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)'
        }}>
        <Typography variant='h2'>Hello World</Typography>
        <Box
          sx={{
            flexGrow: 3,
            width: '85%',
            height: '80vh',
            border: '5px solid lightgrey',
            borderRadius: '10px',
          }}>
          Preview Window Here
        </Box>
        <LoadingButton
          size='large'
          color="secondary"
          onClick={handleLoading}
          loading={loading}
          loadingPosition="center"
          startIcon={<FileDownloadIcon />}
          variant="contained"
          sx={{
            marginTop: '10px',
            padding: '10px 100px',
            backgroundColor: '#e57373',
            '&:hover': {
              backgroundColor: '#CA7370'
            }
          }}
        >
          <span>Download</span>
        </LoadingButton>
      </Box>
    </>
  )
}

export default Preview