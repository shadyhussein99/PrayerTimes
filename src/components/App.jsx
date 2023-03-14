// The main file

import React from 'react'
import { useState } from 'react'
import Title from './Title'
import Form from './Form'
import Results from './Results'

function App() {

  var [result, setResult] = useState("")

  return (

    <div>

      <Title />

      <Form
        setResult={setResult} />

      <Results
        fajr={result?.Fajr}
        sunrise={result?.Sunrise}
        dhuhr={result?.Dhuhr}
        asr={result?.Asr}
        maghrib={result?.Maghrib}
        isha={result?.Isha}
      />
    </div>
  )
}

export default App





