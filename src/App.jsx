import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";





const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <Home />
      
      
    </div>
  );
};

export default App;