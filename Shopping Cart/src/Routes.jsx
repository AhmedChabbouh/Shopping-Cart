
import ProductList from './ProductList';
import Cart from './Cart';
import App from './App';
import Home from './Home';
import ErrorPage from './ErrorPage';
import { Children } from 'react';


const Routes=[
{
path:"/",
element:<App />,
errorElement:<ErrorPage />,
children: [{
path:"/products",
element:<ProductList />,
errorElement:<ErrorPage />
},
{
path:"/cart",
element:<Cart />,
errorElement:<ErrorPage />
},
{
path:"/home",
element:<Home />,
}]
},


{
  path: "*",
  element: <ErrorPage message="Page not found" buttonText="Go to Home" />
}
]
export default Routes;