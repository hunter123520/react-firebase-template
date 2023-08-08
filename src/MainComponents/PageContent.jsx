import React from 'react'
import {Route, Routes} from 'react-router-dom';
import HomePage from '../Pages/HomePage';

// Note to Travel from one page to Another use  <Link to='/page'>

const PageContent = () => {
  return (
    <Routes> 
            <Route path='/' element={<HomePage/> }/>
            <Route path='/Home' element={<HomePage/>}/>
        </Routes>
  )
}

export default PageContent