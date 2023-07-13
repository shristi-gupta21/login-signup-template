import React, { useState } from 'react'
import Login from './components/Login';
import SignUp from './components/SignUp';


 const App = () => {
  const [page,setPage] = useState(false)
  return (
    
    <div className='cntnr'>
    <button onClick={()=>setPage(true)}>SignUp</button>
    <button onClick={()=>setPage(false)} >Login</button>
    {page ? <SignUp/> : <Login/>}
    </div>
  
  )
}

export default App;