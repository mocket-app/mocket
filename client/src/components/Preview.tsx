import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface PreviewProps {
  result: any
}

const jsonObj: any = [
    {
        "stocks": "World Point Terminals, LP",
        "username": "glarner0"
    },
    {
        "stocks": "MediWound Ltd.",
        "username": "pmollen1"
    },
    {
        "stocks": "Old Second Bancorp, Inc.",
        "username": "dhouseman2"
    },
    {
        "stocks": "CorEnergy Infrastructure Trust, Inc.",
        "username": "lcoils3"
    },
    {
        "stocks": "Aptose Biosciences, Inc.",
        "username": "bkaiser4"
    },
  ]


const Preview = ({result}: PreviewProps) => {
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
        }}>
        <Typography variant='h2'>Preview</Typography>
        <Box
          sx={{
            flexGrow: 3,
            width: '85%',
            height: '80vh',
            border: '5px solid lightgrey',
            borderRadius: '10px',
          }}>
          <pre style={{ marginLeft: '30px' }}>
            {result && JSON.stringify(result, null, 2)}
            {!result && JSON.stringify(jsonObj, null, 2)}
          </pre>
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