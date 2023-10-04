import { Route, Routes } from "react-router-dom";
import ContactForm from "./components/contact/ContactForm";
import Home from "./components/home/Home";

const AppRoutes = () => {

    return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/contact" element={<ContactForm />} />
        </Routes>
    </div>
    )
}

export default AppRoutes;