import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Lists from "./components/Lists";
import Badges from "./components/Badges";
import Cards from "./components/Cards";
import Plans from "./components/Plans";
import Links from "./components/Links";
import Icons from "./components/Icons";
import Buttons from "./components/Buttons";
import Inputs from "./components/Inputs";
import Media from "./components/Media";
import Quotes from "./components/Quotes";
import Grids from "./components/Grids";
import Testimonials from "./components/Testimonials";
import Callouts from "./components/Callouts";
import Collapsibles from "./components/Collapsibles";
import Blocks from "./components/Blocks";
import Navbar from "./components/Navbar";
import BlockHero from "./components/BlockHero";
import BlockDomain from "./components/BlockDomain";
import BlockPlans from "./components/BlockPlans";
import BlockFeatures from "./components/BlockFeatures";
import BlockShowcase from "./components/BlockShowcase";
import BlockTestimonials from "./components/BlockTestimonials";
import BlockFooter from "./components/BlockFooter";
import SocialMediaIcons from "./components/SocialMediaIcons";
import BorderBox from "./components/BorderBox";
import BlockSpeakers from "./components/BlockSpeakers";
import BlockEvent from "./components/BlockEvent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BlockHero />
      <BlockFeatures />
      <BlockEvent />
      <BlockSpeakers />
      <BlockShowcase />
      <BlockPlans />
      <BlockTestimonials />
      <BlockFooter />
    </>
  );
}

export default App;
