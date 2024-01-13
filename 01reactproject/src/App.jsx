import "./App.css";
import Blog from "./Component/Blog";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Testmoniyal from "./Component/Testmoniyal";

function App() {
  return (
    <>
      <div>
        <Header />
        <Testmoniyal name="Card" />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
