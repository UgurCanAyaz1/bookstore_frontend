import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegistrationPage from "./pages/RegistrationPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ErrorPage from "./pages/ErrorPage"
import BooksPage from "./pages/BooksPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/Login",
        element: <LoginPage/>
    },
    {
        path: "/Registration",
        element: <RegistrationPage/>
    },
    {
        path: "/Contact",
        element: <ContactPage/>
    },
    {
        path: "/Cart",
        element: <CartPage/>
    },
    {
        path: "/Checkout",
        element: <CheckoutPage/>
    },
    {
        path: "/Books",
        element: <BooksPage/>
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
]
)

export default router