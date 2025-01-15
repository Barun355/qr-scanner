import { Clients, Contact, Feature, Header, Hero, Review } from "../components";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Hero />
      <Clients />
      <Feature />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
