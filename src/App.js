import { Toaster } from "react-hot-toast";
import "./App.css";
import BannerCarousel from "./Component/BannerCarousel/BannerCarousel";
import Pricing from "./Component/Pricing/Pricing";
import Footer from "./Component/Shared/Footer/Footer";
import Header from "./Component/Shared/Header/Header";
import Statistic from "./Component/Statistic/Statistic";
import ContactUs from "./ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <BannerCarousel />
      <Pricing />
      <Statistic />
      <ContactUs />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
