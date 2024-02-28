import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import { TokenDisplay } from "./Components/TokenDisplay";
import "./App.css"
import Footer from "./Components/Footer";
import Roadmap from "./Components/Roadmap";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Product/>
      <Roadmap/>
      <TokenDisplay/>
      <Footer/>
    </div>
  );
}

export default App;
