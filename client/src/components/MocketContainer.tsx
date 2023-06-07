import React from 'react';
import Form from './Form'
import Preview from './Preview'

const MocketContainer = (): JSX.Element => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Form />
        <Preview />
      </div>
    </>
  )
}

export default MocketContainer;