import { Outlet } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/landing.css";
import "@/assets/css/landingresponsive.css";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
