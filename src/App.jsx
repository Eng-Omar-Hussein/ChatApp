import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ChatRoom from './pages/ChatRoom';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { useEffect, useState } from 'react';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import Remember from './components/Remember';

const users = [
  { name: "omar", phone: "01100112553", email: "omar@gmail.com", password: "123" },
  { name: "ali", phone: "01100112253", email: "ali@gmail.com", password: "1234" },
  { name: "mona", phone: "01100612553", email: "mona@gmail.com", password: "1235" }
]
function App() {
  useEffect(() => {
    document.body.classList.add('my-body-class');
  }, []);
  // const isAnInteger = (text) => {
  //   var intTestRegex = /^\s*(\+|-)?\d+\s*$/;
  //   return String(text).search(intTestRegex) !== -1;
  // }
  // const isSignificant = (text) => {
  //   var notWhitespaceTestRegex = /[^\s]{1,}/;
  //   return String(text).search(notWhitespaceTestRegex) !== -1;
  // }

  let [userInit, setuserInit] = useState({ name: "", phone: "", email: "", password: "" })
  let [usersList, setusersList] = useState(users)

  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route path="/" element={
            <Remember>
              <div className="d-flex flex-column align-items-center">
                <Login usersList={usersList} />
              </div>
            </Remember>
          } />
          <Route path="/reg" element={
            <Remember>
              <SignUp userInit={userInit} setuserInit={setuserInit} />
            </Remember>
          } />
          <Route path="/chat" element={
            <ProtectedRoute>
              <ChatRoom />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
