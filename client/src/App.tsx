import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Auth from '@/pages/Auth';
import Home from '@/pages/Home';

import ConsumerDashboard from '@/pages/ConsumerDashboard';

const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/auth', Component: Auth },
  { path: '/consumer/dashboard', Component: ConsumerDashboard},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
