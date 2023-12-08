import { Route, Routes } from 'react-router-dom';

import NotFound from '@/pages/404';
import Home from '@/pages/Home';
import Orders from '@/pages/Orders';
import RootLayout from '@/pages/RootLayout';
import Accounts from './pages/Account';
import ConsumerDashboard from './pages/ConsumerDashboard';

function App() {
  const isAuth = false;

  return (
    <Routes>
      <Route path="/" Component={RootLayout}>
        <Route index Component={isAuth ? ConsumerDashboard : Home} />
        <Route path="orders" Component={Orders} />
        <Route path="account" Component={Accounts} />
        <Route path="*" Component={NotFound} />
      </Route>
    </Routes>
  );
}

export default App;
