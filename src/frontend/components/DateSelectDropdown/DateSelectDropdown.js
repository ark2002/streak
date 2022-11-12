import "./DateSelectDropdown.css";

const DateSelectDropdown = () => {
  return (
    <div className="navbar__date-select flex--row">
      <p className="date-select__text">Jun 11, 2020 - Jul 8, 2020</p>
      <span className="material-symbols-outlined">arrow_drop_down</span>
    </div>
  );
};

export { DateSelectDropdown };
