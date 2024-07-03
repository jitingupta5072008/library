import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ViewPage from "./pages/ViewPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Notice from "./pages/Notice";
import Contact from "./pages/Contact";
import AllStudent from "./pages/AllStudent";
import Footer from "./components/Footer";
import AttendenceForm from "./pages/AttendenceForm";
import About from "./pages/About";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/attendence" element={<AttendenceForm/>} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/all-students" element={<AllStudent />} />
          <Route path="/admin/login" element={<Login />} />

          <Route path="/create" element={
            <ProtectedRouteForAdmin>
              <CreatePage />
            </ProtectedRouteForAdmin>
            } />
          <Route path="/edit/:id" element={
            <ProtectedRouteForAdmin>
            <EditPage />
            </ProtectedRouteForAdmin>
        } />
          <Route path="/view/:id" element={
            <ProtectedRouteForAdmin>
            <ViewPage />
            </ProtectedRouteForAdmin>
            } />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRouteForAdmin>
                {" "}
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin?.user?.email === "jaihinddigitallibrary@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/admin/login"} />;
  }
};
