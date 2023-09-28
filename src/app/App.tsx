// import { useState } from 'react'
import './App.css'
import {Router} from "@/pages";
// import ErrorBoundary from "@/shared/ErrorBoundary"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        {/*<ErrorBoundary fallback={<p>Something went wrong</p>}>*/}
        <Router/>
        {/*</ErrorBoundary>*/}
    </>
  )
}

export default App
