import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
import Wapp from '../utils/wapp';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <Wapp />
    </div>
  );
}