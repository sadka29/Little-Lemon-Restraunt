import React, { useState } from 'react'
import BookingForm from './BookingForm'



const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);
  return (
    <section>

      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    </section>
  )
}

export default BookingPage