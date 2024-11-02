import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './Context/UserContextProvider'


function App() {
  

  return (
    <UserContextProvider>
      <h1>React Start Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
