import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}