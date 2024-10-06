import ContentLoader from "react-content-loader";
import { getCurrentTheme } from "../ThemeButton/GetCurrentTheme";

const PageLoader = () => (
  <ContentLoader
    height={95}
    width="100%" // Adjusted width to fit better
    speed={1} // Slightly faster for smoother animation
    backgroundColor={getCurrentTheme() === 'light' ? '#f3f4f6' : '#6b7280'}
    foregroundColor={getCurrentTheme() === 'light' ? '#e5e7eb' : '#4b5563'}
    viewBox="0 0 100% 95"
    style={{ paddingInline: '24px', paddingTop: '24px' }}
  >
    {/* Loader skeleton structure */}
    <rect x="0" y="0" rx="120" ry="120" width="50" height="50" /> 
    <rect x="70" y="10" rx="5" ry="5" width="180" height="16" /> 
    <rect x="70" y="40" rx="4" ry="4" width="50" height="10" /> 
    <rect x="525" y="25" rx="4" ry="4" width="90" height="12" /> 
    <rect x="825" y="25" rx="4" ry="4" width="70" height="12" /> 
    <rect x="1106" y="25" rx="4" ry="4" width="70" height="12" />
  </ContentLoader>
);

export default PageLoader;
