// The main file

import React from 'react'
import { useState } from 'react'
import Title from './Title'
import Form from './Form'
import Results from './Results'

function App() {

  var [result, setResult] = useState("")

  var [showResults, setShowResults] = useState(false)

  return (

    <div className='text-white'>

      <Title />

      <Form
        setResult={setResult}
        setShowResults={setShowResults} />

      {showResults ? <Results
        fajr={result?.Fajr}
        sunrise={result?.Sunrise}
        dhuhr={result?.Dhuhr}
        asr={result?.Asr}
        maghrib={result?.Maghrib}
        isha={result?.Isha}
      /> : null}

    </div>
  )
}

export default App





