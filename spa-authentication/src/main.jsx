import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeCsrf } from './lib/axios.js';
import { Navigate, Outlet } from "react-router-dom";
import Users from './pages/Users.jsx';


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
        path: "/users",
        element: <ProtectedRoute />,
        children: [
            { path: "/users", element: <Users /> },
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
    <StrictMode>
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
    </StrictMode>

);
