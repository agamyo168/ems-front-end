
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Layout from './components/layout/Layout';
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}>       </Route>*/}
        <Route path="/login" element={<LoginScreen />} />
        <Route element={<ProtectedRoutes/>} >
        <Route path="/" element={<Layout />} />
        </Route>

      </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
