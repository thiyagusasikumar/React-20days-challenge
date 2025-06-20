import React from 'react'
import Use_State from './components/Use_State'
import Use_Effect from './components/Use_Effect'
import Use_Ref from './components/Use_Ref'

const App = () => {
  return (
    <div>
      <Use_State/>
      <hr />
      <Use_Effect/>
      <hr />
      <Use_Ref />
      <hr />
    </div>
  )
}

export default App