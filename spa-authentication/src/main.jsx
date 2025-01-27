import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navigate, Outlet } from "react-router-dom";
import CustomerEdit from './pages/CustomerEdit.jsx';
import UserProfile from './pages/UserProfile.jsx';
import { initializeCsrf } from './lib/axios.js';
import Customers from './pages/Customers.jsx';
import { createRoot } from 'react-dom/client';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Chat from './pages/Chat.jsx';



const queryClient = new QueryClient();

const csrfCookieExists = () => {
    return document.cookie.split("; ").some((cookie) => cookie.startsWith("XSRF-TOKEN="));
};

if (!csrfCookieExists()) {
    localStorage.removeItem('authUser');
    initializeCsrf();
}


const ProtectedRoute = () => {
    const authUser = localStorage.getItem("authUser");

    if (!authUser) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};


const PublicRoute = () => {
    const authUser = localStorage.getItem("authUser");

    if (authUser) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            { path: "/", element: <Home /> },
        ],
    },
    {
        path: "/login",
        element: <PublicRoute />,
        children: [
            { path: "/login", element: <Login /> },
        ],
    },
    {
        path: "/register",
        element: <PublicRoute />,
        children: [
            { path: "/register", element: <Register /> },
        ],
    },
    {
        path: "/customers",
        element: <ProtectedRoute />,
        children: [
            { path: "/customers", element: <Customers /> },
        ],
    },
    {
        path: "/chat",
        element: <ProtectedRoute />,
        children: [
            { path: "/chat", element: <Chat /> },
        ],
    },
    {
        path: "/customers/:id/edit",
        element: <ProtectedRoute />,
        children: [
            { path: "/customers/:id/edit", element: <CustomerEdit /> },
        ],
    },
    {
        path: "/user/profile",
        element: <ProtectedRoute />,
        children: [
            { path: "/user/profile", element: <UserProfile /> },
        ],
    },

], {
    future: {
        v7_skipActionErrorRevalidation: true,
        v7_skipActionStatusRevalidation: true,
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
    },
});



createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider
            router={router}
            future={{
                v7_skipActionErrorRevalidation: true,
                v7_skipActionStatusRevalidation: true,
                v7_startTransition: true,
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
            }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
);
