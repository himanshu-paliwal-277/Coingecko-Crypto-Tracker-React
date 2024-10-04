import ContentLoader from "react-content-loader";

const LineLoader = () => (
  <ContentLoader
    height={6}
    width="100%"
    speed={1.5} 
    backgroundColor={'#EEBC1D'} 
    foregroundColor={'#4b5563'} 
    viewBox="0 0 100% 6"
  >
    {/* Loader skeleton structure */}
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="6" /> 
  </ContentLoader>
);

export default LineLoader;
