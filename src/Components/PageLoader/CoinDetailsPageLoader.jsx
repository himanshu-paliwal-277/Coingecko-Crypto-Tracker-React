import ContentLoader from "react-content-loader";

const CoinDetailsPageLoader = () => (
  <ContentLoader
    height={595}
    width="100%"
    speed={1}
    backgroundColor={'#6b7280'} 
    foregroundColor={'#4b5563'} 
    viewBox="0 0 100% 595"
    style={{ paddingInline: '20px', paddingTop: '20px' }}
  >
    {/* Loader skeleton structure */}
    <rect x="70" y="0" rx="120" ry="120" width="192" height="192" /> 
    <rect x="110" y="220" rx="5" ry="5" width="110" height="20" /> 
    <rect x="5" y="300" rx="4" ry="4" width="28%" height="10" /> 
    <rect x="5" y="325" rx="4" ry="4" width="28%" height="10" /> 
    <rect x="5" y="350" rx="4" ry="4" width="28%" height="10" /> 
    <rect x="5" y="400" rx="8" ry="8" width="28%" height="100" /> 
    <rect x="420" y="10" rx="8" ry="8" width="66%" height="500" /> 
  </ContentLoader>
);

export default CoinDetailsPageLoader;
