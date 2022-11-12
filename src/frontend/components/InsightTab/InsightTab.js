import { ExampleLineGraph } from "../ExampleLineGraph/ExampleLineGraph";
import { InsightChip } from "../InsightChip/InsightChip";
import "./InsightTab.css";

const InsightTab = ({ insight }) => {
  const { title, subtitle, chips, graph } = insight;
  return (
    <div className="InsightTab flex--column">
      <div className="insighttab__headings flex--column">
        <p className="insighttab__title">{title}</p>
        <p className="insighttab__subtitle">{subtitle}</p>
      </div>
      <div className="insighttab__chip-container flex--row">
        {chips.map((chip) => (
          <InsightChip key={chip.title} chip={chip} />
        ))}
      </div>
      <div className="insighttab__graph-container">
        <ExampleLineGraph graph={graph} />
      </div>
    </div>
  );
};

export { InsightTab };
