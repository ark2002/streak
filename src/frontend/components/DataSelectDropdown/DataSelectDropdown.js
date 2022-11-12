import "./DataSelectDropdown.css";

const DataSelectDropdown = () => {
  return (
    <div className="navbar__data-select flex--row">
      <img
        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_ads_logo_icon_171064.png"
        alt="select__img"
        className="data-select__img"
      />
      <div className="data-select__container flex--column">
        <p className="data-select__selected"> default value</p>
        <p className="data-select__help">Click Here to select value</p>
      </div>
      <span className="material-symbols-outlined">arrow_drop_down</span>
    </div>
  );
};

export { DataSelectDropdown };
