import { piechartData } from "../../data";
import { ExamplePieChart } from "../ExamplePieChart/ExamplePieChart";
import "./PiechartSection.css";

const PiechartSection = () => {
  const piecharts = piechartData;
  return (
    <div className="pie-chart__section flex--column">
      <div className="insighttab__headings flex--column">
        <p className="insighttab__title">Device Breakdown</p>
        <p className="insighttab__subtitle">By Clicks, Costs and Conversions</p>
      </div>
      <div className="pie-chart__container flex--row">
        {piecharts.map((piechart) => (
          <ExamplePieChart key={piechart.title} piechart={piechart} />
        ))}
      </div>
    </div>
  );
};

export { PiechartSection };
