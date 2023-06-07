import React, { useState, useEffect } from 'react';
import { Grid, Box, TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select'

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

function FormInput() {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  const [type, setType] = useState('');

  const typeComponents: any = [];

  const getTypes = (group: string, data: any): any => {
    console.log('inside getTypes');
    const types: string[] = [];
    data.forEach((el: any) => {
      if (el.group === group) {
        types.push(el.type)
      }
    })
    console.log('types', types);
    types.forEach((el) => {
      console.log('el', el);
      typeComponents.push(<MenuItem value={el} >{el}</MenuItem>)
    })
    console.log('components', typeComponents);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string)
  }

  useEffect(() => {
    getTypes(group, data);
    console.log(group, type);
  }, [group, type])

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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
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
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {typeComponents}
          </Select>
        </FormControl>

    </div>
  )
}

export default FormInput