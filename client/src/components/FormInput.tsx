import React, { useState, useEffect } from 'react';
import { Grid, Box, TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select'
// import data from ... I dont know how to import from another file

const data = [
  {
    type: "Character Sequence",
    group: "Advanced"
  },
  {
    type: "Digit Sequence",
    group: "Advanced"
  },
  {
    type: "Color",
    group: "Basic"
  },
  {
    type: "Boolean",
    group: "Basic"
  },
  {
    type: "Car Make",
    group: "Cars"
  },
  {
    type: "Car Model",
    group: "Cars"
  }
]

interface FormInputProps {
  index: number
  fieldData: Object[]
  setFieldData: (fieldData: Object[]) => void
}

function FormInput({index, fieldData, setFieldData}: FormInputProps) {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [type, setType] = useState('');

  const typeComponents: any = [];

  // update array of field data
  // const updateFieldData = (index: number) => {
  //   const copy = [...fieldData]
  //   const obj = { name, type }
  //   copy.splice(index, 1, obj)
  //   setFieldData(copy)
  // }

  useEffect(() => {
    const copy = [...fieldData]
    const obj = { name, type }
    copy.splice(index, 1, obj)
    setFieldData(copy)
  }, [name, type])




  const getTypes = (group: string, data: any): any => {
    const types: string[] = [];
    data.forEach((el: any) => {
      if (el.group === group) {
        types.push(el.type)
      }
    })
    types.forEach((el) => {
      console.log('el', el);
      typeComponents.push(<MenuItem value={el} >{el}</MenuItem>)
    })
  }

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
  }

  useEffect(() => {
    getTypes(group, data);
    console.log(group, type);
  }, [group, type, name])

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
   
        <TextField variant='outlined' placeholder='Field Name' onChange={(e) => setName(e.target.value)} sx={{ width: 0.4 }}/>
    
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-helper-label">Group</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={group}
            label="Group"
            onChange={(e) => setGroup(e.target.value)}
          >
            <MenuItem value='Basic'>Basic</MenuItem>
            <MenuItem value='Advanced'>Advanced</MenuItem>
            <MenuItem value='Cars'>Cars</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            {typeComponents}
          </Select>
        </FormControl>

    </div>
  )
}

export default FormInput