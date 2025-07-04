import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses';
import Login from './pages/Login';
import CourseDetail from './pages/CourseDetail';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import Certificate from './pages/Certificate';
import Quiz from './pages/Quiz';
import Forum from './pages/Forum';
import LiveClass from './pages/LiveClass';
const App = () => {
  return (
    <>
    <Navbar />
    <main>    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/certificate" element={<Certificate />} />
       <Route path="/quiz" element={<Quiz />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/live-class" element={<LiveClass />} />
        </Routes>
      
    </main>
    <Footer/>
    </>
  )
}

export default App;