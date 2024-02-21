import "./App.css";
import HeroSection from "./components/HeroSection";
import Quote from "./components/Quote";
import GameBoy from "./components/GameBoy";
import { GlobalStyles } from "./styles/GlobalStyles";
import DesignSection from "./components/DesignSection";
import DisplaySection from "./components/DisplaySection";
import ProcessorSection from "./components/ProcessorSection";
import BatterySection from "./components/BatterySection";
import ColorSection from "./components/ColorSection";
import GameSection from "./components/GameSection";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Quote />
      <GameBoy />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <GameSection />
      <ColorSection />
    </div>
  );
}

export default App;
