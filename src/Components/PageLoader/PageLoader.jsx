import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    height={95}
    width="100%" // Adjusted width to fit better
    speed={1} // Slightly faster for smoother animation
    backgroundColor={'#6b7280'} // Darker background (tailwind's gray-800)
    foregroundColor={'#4b5563'} // Lighter foreground (tailwind's gray-600)
    viewBox="0 0 100% 95"
    style={{ paddingInline: '24px', paddingTop: '24px' }}
  >
    {/* Loader skeleton structure */}
    <rect x="0" y="0" rx="120" ry="120" width="50" height="50" /> {/* Coin icon */}
    <rect x="70" y="10" rx="5" ry="5" width="180" height="16" /> {/* Coin name */}
    <rect x="70" y="40" rx="4" ry="4" width="50" height="10" /> {/* Coin price */}
    <rect x="525" y="25" rx="4" ry="4" width="90" height="12" /> Coin price
    <rect x="825" y="25" rx="4" ry="4" width="70" height="12" /> Coin price
    <rect x="1106" y="25" rx="4" ry="4" width="70" height="12" /> Coin price
  </ContentLoader>
);

export default MyLoader;
