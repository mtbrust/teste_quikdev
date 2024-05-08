import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import UserApp from './UserApp';
import PostApp from './PostApp';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<UserApp />} />
        <Route path='/user' element={<UserApp />} />
        <Route path='/post' element={<PostApp />} />
      </Routes>
    </Router>
  )
}

export default App;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <UserApp />
//   </React.StrictMode>
// );