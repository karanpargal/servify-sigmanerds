import OnboardedRoute from '@/components/shared/OnboardedRoute';
import ProtectedRoute from '@/components/shared/ProtectedRoute';
import RootLayout from '@/components/shared/RootLayout';
import { Toaster } from '@/components/ui/toaster';
import useWallet from '@/hooks/useWallet';

import NotFound from '@/pages/404';
import Accounts from '@/pages/Account';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import Onboarding from '@/pages/Onboarding';
import Orders from '@/pages/Orders';
import BookService from './pages/BookService';

import { Navigate, Route, Routes } from 'react-router-dom';
import CreateServiceListingForm from './components/Forms/CreateServiceListingForm';

function App() {
  const { isConnected } = useWallet();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isConnected ? <Navigate to="/dashboard" /> : <Home />}
        />
        <Route path="book-service" Component={BookService} />
        <Route path="create-listing" Component={CreateServiceListingForm} />
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
            <Route path="dashboard" Component={Dashboard} />
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
