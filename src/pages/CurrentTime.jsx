import { useState } from 'react'

/* using setInterval */

const CurrentTime = () => {
  const [now, setNow] = useState(Date);

  setInterval(() => {
    setNow(Date())
  }, 1000);
  
  return (
    <>
    <div>CurrentTime</div>
    { now }
    </>
  )
}

export default CurrentTime

