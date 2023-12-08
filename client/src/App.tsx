import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/auth', Component: Auth },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
