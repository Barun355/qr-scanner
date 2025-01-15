import { Clients, Contact, Feature, Header, Hero, Review } from "../components";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

function Landing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <Clients />
      <Feature />
      <Pricing />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
