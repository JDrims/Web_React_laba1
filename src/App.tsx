import "./App.module.css";
import Header from "./components/Header/Header";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import Slider from "./components/Slider/Slider";
import ArticleCard from "./components/ArticleCard/ArticleCard";

function App() {
  return (
    <>
      <Header />
      <ServiceCard />
      <Slider />
      <ArticleCard />
    </>
  );
}

export default App;
