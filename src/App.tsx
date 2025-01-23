
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Layout from './components/Layout/Layout';
import SignUpScreen from './screens/SignUpScreen';
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route element={<ProtectedRoutes/>} >
        <Route path="/" element={<Layout />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
