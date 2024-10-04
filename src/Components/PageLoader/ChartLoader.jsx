import ContentLoader from "react-content-loader";

const ChartLoader = () => (
  <ContentLoader
    height={500}
    width="100%"
    speed={1}
    backgroundColor={'#6b7280'} 
    foregroundColor={'#4b5563'} 
    viewBox="0 0 100% 500"
    style={{ paddingInline: '20px', paddingTop: '20px' }}
  >
    {/* Loader skeleton structure */} 
    <rect x="0" y="0" rx="8" ry="8" width="100%" height="90%" /> 
  </ContentLoader>
);

export default ChartLoader;
