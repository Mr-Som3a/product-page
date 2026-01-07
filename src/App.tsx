import Details from "./components/details.tsx";
import HeroSection from "./components/heroSection.tsx";
import NavBar from "./components/navBar.tsx";
import Price from "./components/price.tsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="md:w-[75%] md:mx-auto md:flex md:pt-20 md:space-x-20">
        <section>
          <HeroSection />
        </section>
        <section >
          <Details />
          <Price />
        </section>
      </div>
    </>
  );
}

export default App;
