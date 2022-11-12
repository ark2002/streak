import { tableFinalData } from "../../data";
import "./CampaignTable.css";

const CampaignTable = () => {
  const data = tableFinalData;
  return (
    <table className="campaign__table">
      <thead>
        <tr className="table__head">
          <th className="num__column"></th>
          <th className="campaign__column">Campaign</th>
          <th className="ctr__column">CTR</th>
          <th className="cpc__column">Avg. CPC</th>
          <th className="cost__column">Cost / conv.</th>
        </tr>
      </thead>
      <tbody>
        {data.map((element) => (
          <tr key={element.id}>
            <td style={{ paddingLeft: "5px" }}>{element.id}.</td>
            <td>{element.name}</td>
            <td
              style={{
                backgroundColor: `${element.ctr.bgColor}`,
                paddingLeft: "5px"
              }}
            >
              {element.ctr.value}%
            </td>
            <td
              style={{
                backgroundColor: `${element.cpc.bgColor}`,
                paddingLeft: "5px"
              }}
            >
              ${element.cpc.value}
            </td>
            <td
              style={{
                backgroundColor: `${element.cost.bgColor}`,
                paddingLeft: "5px"
              }}
            >
              ${element.cost.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { CampaignTable };
