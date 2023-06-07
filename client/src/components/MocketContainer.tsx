import React, { useState, useEffect } from 'react';
import Form from './Form'
import Preview from './Preview'

const MocketContainer = (): JSX.Element => {
  const [ fieldData, setFieldData] = useState<Array<Object>>([])
  const [ result, setResult ] = useState<Array<Object>>(null)
  console.log('fieldData', fieldData)
  const generateData = async (count?: number) => {
    try {
      const body = { data: fieldData, count: count || 5 }
      const data = await fetch('/api/mock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      const result = await data.json();
      setResult(result)
    }
    catch(err) {
      console.log(err, 'Error in generateData func')
    }
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Form
          fieldData={fieldData}
          setFieldData={setFieldData}
          generateData={generateData}
        />
        <Preview result={result}/>
      </div>
    </>
  )
}

export default MocketContainer;