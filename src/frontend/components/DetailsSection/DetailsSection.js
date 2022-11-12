import { CampaignTable } from "../CampaignTable/CampaignTable";
import { PiechartSection } from "../PiechartSection/PiechartSection";
import "./DetailsSection.css";

const DetailsSection = () => {
  return (
    <div className="detailsSection flex--row">
      <div className="table__container">
        <div className="insighttab__headings flex--column">
          <p className="insighttab__title">Top Campaigns</p>
          <p className="insighttab__subtitle">
            By Clicks, Costs and Conversions
          </p>
          <CampaignTable />
        </div>
      </div>
      <PiechartSection />
    </div>
  );
};

export { DetailsSection };
