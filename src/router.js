import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegistrationPage from "./pages/RegistrationPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import ErrorPage from "./pages/ErrorPage"
import BooksPage from "./pages/BooksPage"
import BooksActionPage from "./pages/BooksActionPage"
import BooksAdventurePage from "./pages/BooksAdventurePage"
import BooksComedyPage from "./pages/BooksComedyPage"
import BooksCrimePage from "./pages/BooksCrimePage"
import BooksDramaPage from "./pages/BooksDramaPage"
import AdminPage from "./pages/AdminPage"
import AdminBookPage from "./pages/AdminBookPage"
import AdminUserPage from "./pages/AdminUserPage"
import UnauthorizedPage from "./pages/UnauthorizedPage"
import BookDetailPage from "./pages/BookDetailPage"
import FavPage from "./pages/FavPage"

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
        path: "/Books/Action",
        element: <BooksActionPage/>
    },
    {
        path: "/Books/Adventure",
        element: <BooksAdventurePage/>
    },
    {
        path: "/Books/Comedy",
        element: <BooksComedyPage/>
    },
    {
        path: "/Books/Crime",
        element: <BooksCrimePage/>
    },
    {
        path: "/Books/Drama",
        element: <BooksDramaPage/>
    },
    {
        path: "/Admin",
        element: <AdminPage/>
    },
    {
        path: "/Admin/Book",
        element: <AdminBookPage/>
    },
    {
        path: "/Admin/User",
        element: <AdminUserPage/>
    },
    {
        path: "/Unauthorized",
        element: <UnauthorizedPage/>
    },
    {
        path: "/Book/Detail",
        element: <BookDetailPage/>
    },
    {
        path: "/Fav",
        element: <FavPage/>
    },
    {
        path: "*",
        element: <ErrorPage/>
    }
]
)

export default router