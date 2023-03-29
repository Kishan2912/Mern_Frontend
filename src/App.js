import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Profile from './Components/Profile/Profile'
import EditProfile from './Components/EditProfile/EditProfile'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
          <Route exact path='/editprofile' element={< EditProfile />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App