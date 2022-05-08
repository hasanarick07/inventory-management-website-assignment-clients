import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import AddNewBikes from "./Component/AddNewBikes/AddNewBikes";
import Bikes from "./Component/Bikes/Bikes";
import Blogs from "./Component/Blogs/Blogs";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Home from "./Component/Home/Home";
import Inventory from "./Component/Inventory/Inventory";
import Login from "./Component/LogIn/Login";
import ManageInventories from "./Component/ManageInventories/ManageInventories";
import MyBikes from "./Component/MyBikes/MyBikes";
import Register from "./Component/Register/Register";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Footer from "./Component/Shared/Footer/Footer";
import Header from "./Component/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/bikes" element={<Bikes></Bikes>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/addNewBikes" element={<AddNewBikes></AddNewBikes>}></Route>
        <Route path="/myBikes" element={<MyBikes></MyBikes>}></Route>
        <Route path="/manageInventories" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="/bikes/:id" element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default App;
