import ProtectedRoute from '@/components/shared/ProtectedRoute';
import NotFound from '@/pages/404';
import Accounts from '@/pages/Account';
import ConsumerDashboard from '@/pages/ConsumerDashboard';
import Home from '@/pages/Home';
import Orders from '@/pages/Orders';
import RootLayout from '@/pages/RootLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import OnboardedRoute from './components/shared/OnboardedRoute';
import { Toaster } from './components/ui/toaster';
import useWallet from './hooks/useWallet';
import Onboarding from './pages/Onboarding';

function App() {
  const { isConnected } = useWallet();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isConnected ? <Navigate to="/dashboard" /> : <Home />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <RootLayout />
            </ProtectedRoute>
          }
        >
          <Route path="onboarding" Component={Onboarding} />

          <Route element={<OnboardedRoute />}>
            <Route path="dashboard" Component={ConsumerDashboard} />
            <Route path="orders" Component={Orders} />
            <Route path="account" Component={Accounts} />
            {/* <Route
          path="chat"
          Component={Chat({ chatId: '123', signer: signer })}
        /> */}
          </Route>
        </Route>
        {/* Catch all route */}
        <Route path="*" Component={NotFound} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
