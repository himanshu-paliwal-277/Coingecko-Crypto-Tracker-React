import ContentLoader from "react-content-loader";
import { getCurrentTheme } from "../ThemeButton/GetCurrentTheme";

const LineLoader = () => (
  <ContentLoader
    height={6}
    width="100%"
    speed={1.5} 
    backgroundColor={getCurrentTheme() === 'light' ? '#EEBC1D' : '#EEBC1D'}
    foregroundColor={getCurrentTheme() === 'light' ? '#4b5563' : '#4b5563'} 
    viewBox="0 0 100% 6"
  >
    {/* Loader skeleton structure */}
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="6" /> 
  </ContentLoader>
);

export default LineLoader;
