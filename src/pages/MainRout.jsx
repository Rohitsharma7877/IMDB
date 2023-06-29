import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './home/Home'

const MainRout = () => {
  return (
    <div className='routes'>
     <Routes>
     
     <Route index element={<Home />}></Route>
     
         <Route path='movie/:id' element={<h1>movies details page</h1>}/>
         <Route path='/movies/:type' element={<h1>movies lists page</h1>}/>
         <Route path='/*' element={<h1>Error page</h1>}/>

     </Routes>

    </div>
  )
}

export default MainRout