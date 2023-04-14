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

    <main className='text-white font-body'>

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

    </main>
  )
}

export default App





