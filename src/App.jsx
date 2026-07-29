import { AppLayout } from "./Components/Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import "./App.css";
const router = createBrowserRouter ([
  {
    path:"/",
    element:<AppLayout/>,
    children:
    [
      {
        path:"/",
        element:<Home/>

    }
  ]

  }

])


const App = () =>{
  return <RouterProvider router={router}>

  </RouterProvider>
}
export default App;