import { Routes, Route } from "react-router-dom"
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { CheckoutFilled } from "./pages/CheckoutFilled";
import { Success } from "./pages/Success";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/checkoutFilled" element={<CheckoutFilled/>} />
            <Route path="/success" element={<Success/>}/>
            </Route>
        </Routes>

    );
}