import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EventsBoard from "./components/EventsBoard.jsx";
import CardDisplay from "./components/CardDisplay.jsx";
import ScrollToTopBtn from "./components/ScrollToTop/ScrollToTopBtn.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#154194",
    },

    secondary: {
      main: "#ffffff",
    },
  },
});

export default function App() {
  const [login, setLogin] = useState({
    loginRegion: [],
    loginOffer: [],
    loginSeek: [],
  });
  const [region, setRegion] = useState([]);
  useEffect(() => {
    login.loginRegion.forEach((item) => {
      fetch(`http://localhost:5000/api/users/location/${item}`)
        .then((response) => response.json())
        .then((data) => setRegion(data));
    });
  }, [login]);
  console.log(region);

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/634ab7e413075ae2b7bbee2b`)
      .then((response) => response.json())
      .then((data) =>
        setLogin({
          loginRegion: data.activityAreas,
          loginOffer: data.offer,
          loginSeek: data.seek,
        })
      );
  }, []);
  function Loading() {
    return <p>Loading...</p>;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {region && region.length !== 0 ? (
          <CardDisplay users={region} />
        ) : (
          <Loading />
        )}
        <CardDisplay users={region} />
        <EventsBoard />
      </div>
    </ThemeProvider>
  );
}
