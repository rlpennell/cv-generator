
import React, { useState } from 'react'

import './styles/reset.css'
import './styles/app.css'

import ContactInfo from './components/ContactInfo'
import SkillSection from './components/SkillSection'
import WorkSection from './components/WorkSection'
import ReferenceSection from './components/ReferenceSection'

const App = () => {
  const [preview, setPreview] = useState(false)

  const handleClick = () => {
    preview ? setPreview(false) : setPreview(true)
  }

  return (
    <div className='app'>
      <ContactInfo preview={preview}/>
      <SkillSection preview={preview}/>
      <WorkSection preview={preview} />
      <ReferenceSection preview={preview} />
      <div className='btn-container'>
        <button onClick={handleClick} className='main-button'>{preview ? 'Edit' : 'Preview'}</button>
        {preview ? <button className='main-button' onClick={() => window.print()}>Save</button> : null}
      </div>
    </div>
  )
}

export default App;
