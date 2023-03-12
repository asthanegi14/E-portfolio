import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Social from "./components/Social";
// import Contact from "./components/Contact";
import Clg from "./components/Clg";
import Footer from "./components/Footer";
function Porth() {
    return (
        <div className="Porth">
            <Navbar />
            <Home />
            <Clg/>
            {/* <Contact/> */}
            <Social />
            <Footer/>
        </div>
    );
}

export default Porth;