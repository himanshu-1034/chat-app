import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/store';
import { QueryClientProvider, QueryClient } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error404 from './components/Error404';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/main/Home';
import { setupColor } from './resources/setup-colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChatScreen from './components/main/ChatScreen';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error404 />
  },
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/chats',
        element: <Home />,
        children: [
          {
            path: '/chats/:chatId',
            element: <ChatScreen />
          }
        ]
      }
    ],
  }
])

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

setupColor();

const theme = createTheme({
  palette: {
    primary: {
      main: '#9633C3',
    },
    secondary: {
      main: '#4A59E2',
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
