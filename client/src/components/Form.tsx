import React, { useState, useEffect } from 'react';
import { Grid, Box, Tabs, Tab, Button, FormControl, MenuItem, Select, InputLabel, TextField } from '@mui/material';
import FormInput from './FormInput';
import { Countertops } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import '../stylesheets/Form.scss';
import { v4 as uuidv4 } from 'uuid';

interface LinkTabProps {
  label?: string;
  href?: string;
  value?: string;
}

interface FormProps {
  fieldData: Object[];
  setFieldData: (fieldData: Object[]) => void;
  generateData: (count?: number) => void;
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


const Form = ({ fieldData, setFieldData, generateData }: FormProps) => {
  const [ value, setValue ] = useState(0)
  const [ fields, setFields ] = useState<Array<React.ReactElement>>([])
  const [ loading, setLoading ] = useState(false)
  const [ count, setCount ] = useState(null)
  
  let index = 0
  const listCounts: Array<number> = [...Array.from({length: 20}, (_, i) => (i + 1) * 5)]
  console.log('listCounts', listCounts)

  const handleLoading = () => {
    setLoading(true)
    generateData(count)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }

  const addFormInput = () => {
    setFields(currentFields => [...currentFields, <FormInput index={index++} fieldData={fieldData} setFieldData={setFieldData}/>])
    fieldData.push({ name: '', type: ''})
  }

  useEffect(() => {
    const newForms: React.ReactElement[] = []
    for (let i = index; i < 3; i++) {
      newForms.push(<FormInput index={index++} fieldData={fieldData} setFieldData={setFieldData} />)
      fieldData.push({ name: '', type: ''})
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
        <div style={{ height: '75%', overflowY: 'scroll', maxHeight: '70vh' }}>
          {fields}
        </div>
        
        {/* <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-helper-label">Count</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={count}
            label="Count"
            onChange={(e) => setCount(e.target.value)}
          >
            {listCounts}
          </Select>
        </FormControl> */}
        

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
          <Button
            onClick={addFormInput}
            variant='contained'
            sx={{
              backgroundColor: '#ffb74d',
              '&:hover': {
                backgroundColor: '#ffb74d',
              }
            }}
          >Add Field</Button>
          <TextField onChange={(e) => setCount(e.target.value)}/>
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