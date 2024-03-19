import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Landing } from './Components/pages/Landing'
import { Signup } from './Components/pages/Signup'
import { Signin } from './Components/pages/Signin'
import { Dashboard } from './Components/pages/Dashboard'
import { User } from './Components/pages/User'
import './App.css'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainbg h-screen text-white '>
      <RecoilRoot>
<BrowserRouter>

<Routes>
<Route path={"/"} element={<Landing/>}></Route>

<Route path={"/Signup"} element={<Signup/>}></Route>
<Route path={"/Signin"} element={<Signin/>}></Route>
<Route path={"/Dashboard"} element={<Dashboard/>}></Route>
<Route path={"/User"} element={<User/>}></Route>
</Routes>
</BrowserRouter>
</RecoilRoot>
      </div>
    </>
  )
}

export default App
