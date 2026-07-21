import { useState } from 'react'
import './App.css'

import React from 'react'
import { CardDemo } from './components/ui/carddemo'
import { Calendar } from './components/ui/calendar'
const App = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}

export default App
