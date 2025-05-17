import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./layout/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "About",
        element: <h1>About</h1>
      },
      {
        path: "Visit",
        element: <h1>Visit us</h1>
      },
      {
        path: "Contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "Service",
        element: <h1>Service</h1>
      },
      {
        path: "Store",
        element: <h1>Store Layout</h1>,
        children:[
          {
            index: true,
            element: <h1>Product</h1>,
          },
          {
            path: "product:name",
            element: <h1>Product details</h1>
          }
        ]
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