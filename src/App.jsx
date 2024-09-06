// import { useState } from "react";
import Home from "./Pages/Home";
// import { CurrencyContext } from "./Context/currencyContext";

function App() {
  // const [currency, setCurrency] = useState("inr");

  return (
    <>
      {/* <CurrencyContext.Provider value={ {currency, setCurrency} }> */}
        <Home />
      {/* </CurrencyContext.Provider> */}
    </>
  );
}

export default App;
