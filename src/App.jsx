import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./layout/index";
import {Home, Men, Women, Kid, Sale, Trending, ErrorPage, Cart} from "./pages/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
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
        element: <Women/>
      },
      {
        path: "kid",
        element: <Kid/>,
      },
      {
        path: "sale",
        element: <Sale/>
      },
      {
        path: "new&trending",
        element: <Trending/>,
      },
      {
        path: "cart",
        element: <Cart/>,
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