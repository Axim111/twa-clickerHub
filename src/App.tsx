import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useAppSelector,useAppDispatch } from "./feature/reduxHook"
import { decrement, increment } from './entities/redux/slice/counter.ts'

const app = window.Telegram.WebApp
console.log(app)
function App() {
  const count = useAppSelector((state) => state.counter.value)
	const dispatch = useAppDispatch()
	const [countExammple, setCountExammple] = useState(0)

  return (
    <>
     <button onClick={async ()=>dispatch(increment())}>{count}</button>
    </>
  )
}

export default App
