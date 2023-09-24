import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/homePage";
import ServicePage from "./pages/servicePage";
import ContactPage from "./pages/contactPage";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" exact Component={HomePage} />
    <Route path="/services" exact Component={ServicePage} />
    <Route path="/contact-us" exact Component={ContactPage} />
    </Routes>
    </>
  );
}
export default App;
