import { Route, Routes } from 'react-router-dom';

import NotFound from '@/pages/404';
import Home from '@/pages/Home';
import Orders from '@/pages/Orders';
import RootLayout from '@/pages/RootLayout';
import ConsumerDashboard from './pages/ConsumerDashboard';

function App() {
  const isAuth = true;

  return (
    <Routes>
      <Route path="/" Component={RootLayout}>
        <Route index Component={isAuth ? ConsumerDashboard : Home} />
        <Route path="orders" Component={Orders} />
        <Route path="*" Component={NotFound} />
      </Route>
    </Routes>
  );
}

export default App;
