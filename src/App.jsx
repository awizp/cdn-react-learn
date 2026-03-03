import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";

const App = () => {
  return (
    <main className="w-full bg-light-gray text-blacky">

      {/* navbar section */}
      <Navbar />

      {/* Hero section */}
      <HeroPage />

    </main>
  );
};

export default App;