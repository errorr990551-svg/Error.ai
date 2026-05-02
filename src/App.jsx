import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";





const App = () => {
  return (
    <div className="min-h-screen bg-[#F4F3ED] font-sans text-[#0A0A0A] selection:bg-[#FF4D00]/20 selection:text-[#FF4D00]">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;