import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCoinData } from "../../services/fetchCoinData";
import store from "../../State/Store";
import search_icon from "../../assets/search_icon.png";

function SearchCoinFeature() {
  const [coins, setCoins] = useState([]); // Loaded coins data
  const [searchQuery, setSearchQuery] = useState(''); // User search input
  const [filteredCoins, setFilteredCoins] = useState([]); // Coins filtered by search query
  const [showSuggestions, setShowSuggestions] = useState(false); // Control suggestions visibility
  const navigate = useNavigate();
  const { theme } = store();
  
  // Create a ref for the suggestions dropdown to detect outside clicks
  const suggestionsRef = useRef(null);

  // Step 1: Fetch all coin data when the page loads
  useEffect(() => {
    async function getCoinsData() {
      try {
        const allCoins = await fetchCoinData(1, "inr", 100); // Fetch the coins data from your API
        if (!allCoins || !Array.isArray(allCoins)) {
          throw new Error("Invalid data format");
        }
        console.log("Data for search query: ", allCoins);
        setCoins(allCoins);
      } catch (err) {
        console.error("Failed to fetch coin data:", err);
      }
    }
    getCoinsData();
  }, []);

  // Step 2: Filter coins based on search query
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery) {
        const results = coins.filter(coin =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCoins(results);
        setShowSuggestions(true); // Show suggestions when there are results
      } else {
        setFilteredCoins([]);
        setShowSuggestions(false); // Hide suggestions when search query is empty
      }      
    }, 500); // 500ms delay

    return () => clearTimeout(handler);
  
  }, [searchQuery, coins]);

  // Step 3: Handle coin selection
  const handleCoinClick = (id) => {
    navigate(`/details/${id}`);
    setShowSuggestions(false); // Hide suggestions after selection
  };

  // Step 4: Handle clicks outside the suggestions dropdown to hide it
  useEffect(() => {
    // Function to check if the click is outside the suggestions dropdown
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false); // Hide the suggestions UI
      }
    };

    // Add the event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative p-0">
      {/* Search Input */}
      <input
        type="text"
        className="w-[300px] px-4 py-2 border border-gray-300 rounded"
        placeholder="Search for a coin..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
      />
      
      {/* Suggestions Dropdown */}
      {showSuggestions && filteredCoins.length > 0 && (
        <ul
          ref={suggestionsRef} // Attach the ref to the suggestions dropdown
          className="absolute z-10 w-full p-0 m-0 overflow-hidden border border-gray-300 bg-base-100 top-[46px]"
        >
          {filteredCoins.slice(0, 6).map(coin => ( // Show top 6 results 
            <li
              key={coin.id}
              className={`px-4 py-2 cursor-pointer ${theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-600"} flex items-center flex-row flex-nowrap`}
              onClick={() => handleCoinClick(coin.id)} // Redirect to coin details
            >
              <img className={`w-4 h-4 p-0 m-0 hover:bg-transparent ${theme === "light" ? "" : "invert"}`} src={search_icon} alt="search icon" />
              <p className="p-0 ml-4 text-[15px] hover:bg-transparent">{coin.name} ({coin.symbol.toUpperCase()})</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchCoinFeature;
