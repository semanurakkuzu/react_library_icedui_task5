import React from 'react'

import { Button } from 'icedui'
import 'icedui/dist/index.css'

const App = () => {
  return (
    <>
      <Button text='Primary button' type='primary' />
      <Button text='Default button' />
      <Button text='Dashed button' type='dashed' />
      <Button text='Text button' type='text' />
      <Button text='Link button' type='link' />
    </>
  )
}

export default App
