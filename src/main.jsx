import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./components/Home/Home" 
import About from './components/About/About'
import Layout from './Layout'
import ContactUs from './components/Contact Us/ContactUs'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

//another syntax
// const router = createBrowserRouter([
//   { 
//     path: "/",
//     element:<Layout/>,
//     children:[
//       {path:"",
//        element:<Home/>
//       },
//       {path:"about",
//        element:<About/>
//       },
//       {
//         path:"ContactUs",
//         element:<ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>rou
      <Route path='ContactUs' element={<ContactUs/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route loader={githubInfoLoader} path='github' element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
