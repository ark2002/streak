import { insightData } from "../../data";
import { InsightTab } from "../InsightTab/InsightTab";
import "./InsightSection.css";

const InsightSection = () => {
  const data = insightData;
  return (
    <div className="InsightSection flex--row">
      {data.map((insight) => (
        <InsightTab key={insight.title} insight={insight} />
      ))}
    </div>
  );
};

export { InsightSection };
