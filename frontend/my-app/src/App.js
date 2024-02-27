import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import { TokenDisplay } from "./Components/TokenDisplay";
import "./App.css"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Product/>
      <TokenDisplay/>
      <Footer/>
      
    </div>
  );
}

export default App;
