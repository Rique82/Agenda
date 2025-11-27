import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Clientes from './pages/Clientes'
import Atendimentos from './pages/Atendimentos'
import Home from './pages/Home'
import CreateCliente from './pages/Clientes/create'
import UpdateCliente from './pages/Clientes/update'
import CreateAtendimento from './pages/Atendimentos/create'
import UpdateAtendimento from './pages/Atendimentos/update'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
// import { AuthProvider } from './auth/Context'
// import PrivateRoute from './router/PrivateRoute'

function App() {
  // pegar token 
  return (
    // <AuthProvider>
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {/* <Route element={<PrivateRoute />}> */}
        <Route path='/clientes' element={<Clientes />} />
        <Route path='/atendimentos' element={<Atendimentos />} />

        <Route path='/create/cliente' element={<CreateCliente />} />
        <Route path='/update/cliente' element={<UpdateCliente />} />
        
        <Route path='/create/atendimento' element={<CreateAtendimento />} />
        <Route path='/update/atendimento' element={<UpdateAtendimento />} />
        {/* </Route> */}

      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />

      <Footer />
      </main>
    // </AuthProvider>
  )
}

export default App
