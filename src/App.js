import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Protected from './Protected';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  }
  return (
    <div className='App'>

      <Router>
        <Navbar />
        {isLoggedIn === true ?
          (<button onClick={logout}>Log out</button>)

          :
          (<button onClick={login}>Log in</button>)
        }
        <Routes>
          <Route path='/profile' element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
