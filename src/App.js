import "./App.css";
// reset css for consistency
// import "./components/layout/layout.css";
import Layout from "./components/layout/layout";
import ButtonComponent from "./components/buttons/ButtonComponent";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <>
      <Layout>
        <HeroSection />
        <ButtonComponent />
      </Layout>
    </>
  );
}

export default App;
