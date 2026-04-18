
import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import Header from './header/Header'
import router from './router/Router'


function App() {

  return (
    <>
  
    <RouterProvider router={router}/>

    
    </>
  )
}

export default App
