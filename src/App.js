import React, { useContext, useEffect } from "react";

import { Banner } from "./components/Banner/Banner";
import { MainContent } from "./components/Content/MainContent";
import { SideInfo } from "./components/SideInfo/SideInfo";
import { WeatherContext } from "./components/Context/WeatherContext";

function App() {
  const context = useContext(WeatherContext);
  const { getCurrentDailyWeather, getCurrentWeather } = context;

  useEffect(() => {
    getCurrentDailyWeather();
    getCurrentWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <SideInfo />
      <Banner />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
