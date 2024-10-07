import ContentLoader from "react-content-loader";
import store from "../../State/Store";

const CoinDetailsPageLoaderForMobile = () => {
  const { theme } = store();
  return (
    <ContentLoader
    height={595}
    width="100%"
    speed={1}
    backgroundColor={theme === 'light' ? '#f3f4f6' : '#6b7280'} 
    foregroundColor={theme === 'light' ? '#e5e7eb' : '#4b5563'} 
    viewBox="0 0 100% 595"
    style={{ paddingInline: '20px', paddingTop: '20px' }}
  >
    {/* Loader skeleton structure */}
    <rect x="calc(50% - 96px)" y="0" rx="120" ry="120" width="192" height="192" /> 
    <rect x="calc(50% - 80px)" y="230" rx="5" ry="5" width="160" height="30" /> 
    {/* add this in center of loader */}
    <rect x="5" y="300" rx="4" ry="4" width="97%" height="10" /> 
    <rect x="5" y="325" rx="4" ry="4" width="97%" height="10" /> 
    <rect x="5" y="350" rx="4" ry="4" width="97%" height="10" /> 
    <rect x="5" y="400" rx="8" ry="8" width="97%" height="100" /> 
    {/* <rect x="420" y="10" rx="8" ry="8" width="66%" height="500" />  */}
  </ContentLoader>
  )
}

export default CoinDetailsPageLoaderForMobile;
