import { DataSelectDropdown } from "../DataSelectDropdown/DataSelectDropdown";
import { DateSelectDropdown } from "../DateSelectDropdown/DateSelectDropdown";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar flex--row">
      <img
        src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://urbanfeather.com/wp-content/uploads/2019/06/google-ads-logo.png"
        alt="googleads"
        className="navbar__logo"
      />
      <div className="navbar__right flex--row">
        <DataSelectDropdown />
        <DateSelectDropdown />
      </div>
    </div>
  );
};

export { Navbar };
