import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./layout/index";
import {Home, Men} from "./pages/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <Home/>       
      },
      {
        path: "men",
        element: <Men/>
      },
      {
        path: "women",
        element: <h1>Woman</h1>
      },
      {
        path: "kid",
        element: <h1>Kid</h1>,
      },
      {
        path: "sale",
        element: <h1>Sale</h1>
      },
      {
        path: "new&trending",
        element: <h1>New&TrendingLayout</h1>,
      }
    ]
  },
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App