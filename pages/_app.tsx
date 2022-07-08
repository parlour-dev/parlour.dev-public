import "../styles.css";
import "react-alice-carousel/lib/alice-carousel.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import ReactGA from "react-ga4";
import { NextWebVitalsMetric } from "next/app";

const App = ({ Component, pageProps }) => {
  ReactGA.initialize("G-YYKTS21T84");

  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }