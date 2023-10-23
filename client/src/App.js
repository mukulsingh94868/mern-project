import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import { Toaster } from 'react-hot-toast';


function App() {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path='/' exact element={() => <Navigate to='/posts' />} />
            <Route path='/posts' exact element={<Home />} />
            <Route path='/posts/search' exact element={<Home />} />
            <Route path='/posts/:id' exact element={<PostDetails />} />
            {/* <Route path='/auth' exact element={() => (!user ? <Auth /> : <Navigate to="/posts" />)} /> */}
            <Route path='/auth' exact element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
