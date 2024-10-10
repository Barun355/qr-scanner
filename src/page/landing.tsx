import { Clients, Contact, Feature, Header, Hero, Review, Sponsors } from "../components";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="bg-gray-900 text-gray-200">
      <Header />
      <Hero />
      <Feature />
      <Review />
      <Sponsors />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
