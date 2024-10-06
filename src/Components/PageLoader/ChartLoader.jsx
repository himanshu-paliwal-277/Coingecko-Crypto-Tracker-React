import ContentLoader from "react-content-loader";
import { getCurrentTheme } from "../ThemeButton/GetCurrentTheme";

const ChartLoader = () => (
  <ContentLoader
    height={500}
    width="100%"
    speed={1}
    backgroundColor={getCurrentTheme() === 'light' ? '#f3f4f6' : '#6b7280'} 
    foregroundColor={getCurrentTheme() === 'light' ? '#e5e7eb' : '#4b5563'} 
    viewBox="0 0 100% 500"
    style={{ paddingInline: '20px', paddingTop: '20px' }}
  >
    {/* Loader skeleton structure */} 
    <rect x="0" y="0" rx="8" ry="8" width="100%" height="90%" /> 
  </ContentLoader>
);

export default ChartLoader;
