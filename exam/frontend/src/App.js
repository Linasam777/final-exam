import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Menu from './components/nav/Menu'
import Home from './pages/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AdminDashboard from './pages/admin/Dashboard'
import AdminCategory from './pages/admin/Category'
import AdminParticipants from './pages/admin/Participants'
import AdminRoute from './components/routes/AdminRoute'

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not found
    </div>
  )
}
export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} replace />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/category" element={<AdminCategory />} />
          <Route path="admin/participants" element={<AdminParticipants />} />
        </Route>
        <Route path="*" element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  )
}
