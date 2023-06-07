import React, { useState, useEffect } from 'react';
import { Grid, Box, Tabs, Tab, Button } from '@mui/material';
import FormInput from './FormInput'
import { Countertops } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
      sx={{
        '&:hover': {
          backgroundColor: 'lightgrey',
        }
      }}
    />
  );
}


const Form = () => {
  const [ value, setValue ] = useState(0)
  const [ fields, setFields ] = useState<Array<React.ReactElement>>([])
  const [ loading, setLoading ] = useState(false)

  const handleLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }


  const generateFormInputs = () => {

  }

  const addFormInput = () => {
    // setFields(currentArray)
  }

  let counter = 3
  useEffect(() => {
    const newForms: React.ReactElement[] = []
    for (let i = 0; i < counter; i++) {
      newForms.push(<FormInput />)
    }
    setFields(newForms)
  }, [])

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          margin: '20px',
        }}>
        <div>
          <Tabs sx={{ marginBottom: '20px' }} value={value}>
            <LinkTab label='Generate' value="1" />
            <LinkTab label='Saved' value="2" />
          </Tabs>
        </div>
        <FormInput />
        <div style={{ height: '75%' }}>
          {fields}
        </div>
      

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#ffb74d',
              '&:hover': {
                backgroundColor: '#ffb74d',
              }
            }}
          >Add Field</Button>

          <LoadingButton
            size='large'
            color="secondary"
            onClick={handleLoading}
            loading={loading}
            loadingPosition="center"
            // startIcon={<FileDownloadIcon />}
            variant="contained"
            sx={{
              marginTop: '10px',
              padding: '10px 100px',
              backgroundColor: '#81c784',
              '&:hover': {
                backgroundColor: '#66bb6a'
              }
            }}
          >Generate</LoadingButton>
        </div>
      </Box>
    </>
  )
}

export default Form