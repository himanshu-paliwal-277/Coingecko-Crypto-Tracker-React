// import { useContext } from "react";
// import { CurrencyContext } from "../../Context/currencyContext";

import { useNavigate } from "react-router-dom";
import store from "../../State/Store";
import ThemeButton from "../ThemeButton/ThemeButton";

function Navbar() {
  // const {setCurrency} = useContext(CurrencyContext);
  const { setCurrency } = store();
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <div className="z-20 flex items-center px-12 shadow-sm navbar bg-base-100 shadow-primary ">
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
              className="w-64 input input-bordered"
            />
          </li>
          <li className="mx-4">
            <select
              onChange={(e) => setCurrency(e.target.value.toLowerCase())}
              className="w-20 max-w-xs select select-bordered"
            >
              <option className="cursor-pointer bg-base-100">INR</option>
              <option className="cursor-pointer bg-base-100">USD</option>
            </select>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
