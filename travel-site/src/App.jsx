import React from 'react'
import MyCard from './Card'
import MyNav from './NavBar'
import travelData from './Tdata'

function App() {
  const travelInfo = travelData.map(info => {
    return(
      <MyCard
        Key={info.id}
        info = {info}
      />
    );
  })
  return (
  <>
  <MyNav/>
  <section>
  {travelInfo}
  </section>
  </>
  )
}

export default App
