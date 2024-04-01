import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Navigation from "./components/Navigation.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Navigation />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Footer />
    </div>
  );
};

export default App;
