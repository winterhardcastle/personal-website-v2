import { Route, Routes } from "react-router-dom";
import ContactForm from "./components/contact/ContactForm";
import About from "./components/about/About";
import Home from "./components/home/Home";

const AppRoutes = () => {

    return (
    <div>
        <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path ="/contact" element={<ContactForm />} />
            <Route path ="/about" element={<About/>} />
        </Routes>
    </div>
    )
}

export default AppRoutes;