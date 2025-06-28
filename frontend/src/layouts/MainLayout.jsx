// layouts/MainLayout.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import HamburgerMenu from '../components/HamburgerMenu';

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <HamburgerMenu />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
