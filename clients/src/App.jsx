import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EventsBoard from "./components/EventsBoard.jsx";
import ScrollToTopBtn from "./components/ScrollToTop/ScrollToTopBtn.jsx";
import CategoryDashboard from "./components/CategoryDashboard.jsx";
import { users } from "./assets/users.js";
import {
  convertString,
  generateTrigram,
  trigramSimilarity,
} from "./assets/authFunc.js";
import { UserContext } from "./context/UserContext.js";
import CategoryTabs from "./components/CategoryTabs.jsx";
import Footer from "./components/Footer.jsx";
import { Divider } from "@mui/material";

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
  const {
    percentage,
    offering,
    setOffering,
    seeking,
    setSeeking,
    interests,
    setInterests,
  } = useContext(UserContext);

  // function setMatching(data) {
  //   data.forEach((user, _, arr) => {
  //     const provideSupport = [];
  //     const getSupport = [];
  //     const interestMatches = [];

  //     // Mapping
  //     let userInterests = convertString(
  //       user.interests.concat(user.competencies).join("")
  //     );
  //     let userSeek = convertString(user.seek.join(""));
  //     let userOffer = convertString(user.offer.concat(user.competencies).join(""));

  //     // Matching
  //     arr.find((item) => {
  //       // User offers matching what other users seeks
  //       let otherUserSeek = convertString(item.seek.join(""));
  //       if (Number(trigramSimilarity(userOffer, otherUserSeek)) > percentage / 100) {
  //         provideSupport.push(item);
  //       }

  //       // User seeking matching what other users offers
  //       let otherUserOffers = convertString(
  //         item.offer.concat(item.competencies).join("")
  //       );
  //       if (Number(trigramSimilarity(userSeek, otherUserOffers)) > percentage / 100) {
  //         getSupport.push(item);
  //       }

  //       // User interest matches other user interests
  //       let otherUserInterests = convertString(
  //         item.interests.concat(item.competencies).join("")
  //       );
  //       if (Number(trigramSimilarity(userInterests, otherUserInterests)) > percentage / 100) {
  //         interestMatches.push(item);
  //       }
  //     });
  //     setOffering([...new Set(provideSupport)])
  //     setSeeking([...new Set(getSupport)])
  //     setInterests([...new Set(interestMatches)])
  //   });
  // }

  useEffect(() => {
    // fetch(`http://localhost:5000/api/users`)
    //   .then((response) => response.json())
    //   .then((data) => setMatching(data));
    users.forEach((user, _, arr) => {
      const provideSupport = [];
      const getSupport = [];
      const interestMatches = [];

      // Mapping
      let userInterests = convertString(
        user.interests.concat(user.competencies).join("")
      );
      let userSeek = convertString(user.seek.join(""));
      let userOffer = convertString(
        user.offer.concat(user.competencies).join("")
      );

      // Matching
      arr.find((item) => {
        // User offers matching what other users seeks
        let otherUserSeek = convertString(item.seek.join(""));
        if (
          Number(trigramSimilarity(userOffer, otherUserSeek)) >
          percentage / 100
        ) {
          provideSupport.push(item);
        }

        // User seeking matching what other users offers
        let otherUserOffers = convertString(
          item.offer.concat(item.competencies).join("")
        );
        if (
          Number(trigramSimilarity(userSeek, otherUserOffers)) >
          percentage / 100
        ) {
          getSupport.push(item);
        }

        // User interest matches other user interests
        let otherUserInterests = convertString(
          item.interests.concat(item.competencies).join("")
        );
        if (
          Number(trigramSimilarity(userInterests, otherUserInterests)) >
          percentage / 100
        ) {
          interestMatches.push(item);
        }
      });
      setOffering([...new Set(provideSupport)]);
      setSeeking([...new Set(getSupport)]);
      setInterests([...new Set(interestMatches)]);
    });
  }, [percentage]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div style={{ padding: "1.2rem 9rem" }}>
          <ScrollToTopBtn />
          <EventsBoard />
          <CategoryTabs />
        </div>

        <Divider />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
