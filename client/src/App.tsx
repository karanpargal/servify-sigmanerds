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
import ServiceDetails from './pages/ServiceDetails';

import { ChatUIProvider, ENV, lightChatTheme } from '@pushprotocol/uiweb';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ChatLayout from './components/shared/ChatsLayout';
import ChatView from './pages/Chat';

const queryClient = new QueryClient();

function App() {
  const { isConnected, walletClient } = useWallet();

  return (
    <QueryClientProvider client={queryClient}>
      <ChatUIProvider
        theme={lightChatTheme}
        env={ENV.STAGING}
        signer={walletClient}
      >
        <BrowserRouter>
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
                <Route path="dashboard" Component={Dashboard} />
                <Route path="orders" Component={Orders} />
                <Route path="chats" Component={ChatLayout}>
                  <Route path=":chatId" Component={ChatView} />
                </Route>
                <Route path="account" Component={Accounts} />

                <Route path="services/:id" Component={ServiceDetails} />
              </Route>
            </Route>
            {/* Catch all route */}
            <Route path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ChatUIProvider>
    </QueryClientProvider>
  );
}

export default App;
