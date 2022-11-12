import "./InsightChip.css";

const InsightChip = ({ chip }) => {
  const { title, data, ratio, profit } = chip;
  return (
    <div className="insighttab__chip flex--column">
      <p className="chip__title">{title}</p>
      <p className="chip__data">{data}</p>
      <p
        className={`chip__ratio flex--row  ${profit ? "positive" : "negative"}`}
      >
        <span className="material-symbols-outlined">arrow_upward</span>
        {ratio}
      </p>
    </div>
  );
};

export { InsightChip };
