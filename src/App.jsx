import Header from './components/header';
import Applications from './components/applications';
import Footer from './components/footer';
import './styles/index.css';

export default function App() {
  return (
    <div className="app">
      
      <Header />

      <Applications />

      <Footer />
    </div>
  );
}