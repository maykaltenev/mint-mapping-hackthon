import React, { useState } from "react";

const userTemplate = [];

export const UserContext = React.createContext(userTemplate);

export const UserContextProvider = (props) => {
  const [percentage, setPercentage] = useState(0) 
  const [offering, setOffering] = useState([])
  const [seeking, setSeeking] = useState([])
  const [interests, setInterests] = useState([])

  const userContextValue = {
    percentage, setPercentage,
    offering, setOffering,
    seeking, setSeeking,
    interests, setInterests
  }

  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  );
}