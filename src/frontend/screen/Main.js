import { DetailsSection, InsightSection, Navbar } from "../components";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <p className="page__title">Overview</p>
      <InsightSection />
      <DetailsSection />
    </div>
  );
};

export { Main };
