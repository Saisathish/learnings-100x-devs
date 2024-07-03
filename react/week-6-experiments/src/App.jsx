import { Fragment, useState } from "react"
import { memo } from 'react';

function App() {
  const [num, setNum] = useState(0);

  function changestuff() {
    setNum("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changestuff}>Click me to change the title</button>
      <Header title={num} />
      <br />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  )
}

const Header = memo(function ({title}) {
  return <div>
    {title}
  </div>
})

export default App
