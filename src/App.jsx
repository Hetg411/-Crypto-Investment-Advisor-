import Investment from './Investment'
import About from './About'
import Page1 from './Page1'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  
  const router=createBrowserRouter([
    {
      path:"/About",
      element:<Investment/>
    },
    {
      path:"/Investment",
      element:<About/>
    },
    {
      path:"/",
      element:<Page1/>
    }
  ])
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
