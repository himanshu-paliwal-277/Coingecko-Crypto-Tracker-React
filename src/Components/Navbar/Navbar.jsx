// import { useContext } from "react";
// import { CurrencyContext } from "../../Context/currencyContext";

import { useNavigate } from "react-router-dom";
import store from "../../State/Store";

function Navbar() {
  // const {setCurrency} = useContext(CurrencyContext);
  const { setCurrency } = store();
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="flex items-center px-12 shadow-lg navbar bg-base-100 shadow-white">
      <div className="flex-1">
        <a
          className="text-2xl font-bold btn btn-ghost"
          onClick={() => goToHome()}
        >
          Crypto Tracker
        </a>
      </div>
      <div className="flex-none">
        <ul className="flex items-center px-1 text-lg menu menu-horizontal">
          <li>
            <input
              type="text"
              placeholder="Search"
              className="w-24 input input-bordered md:w-auto"
            />
          </li>
          <li>
            <select
              onChange={(e) => setCurrency(e.target.value.toLowerCase())}
              className="w-20 max-w-xs select select-bordered"
            >
              <option className="bg-base-100">INR</option>
              <option className="bg-base-100">USD</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
