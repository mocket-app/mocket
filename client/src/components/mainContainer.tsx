import React, { useState } from 'react';
import Form from './Form'
import Preview from './Preview'

const MainContainer = () => {

  return (
    <>
      <div style={{ display: "flex" }}>
        <Form />
        <Preview />
      </div>
    </>
  )
}

export default MainContainer;