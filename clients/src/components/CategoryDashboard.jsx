import React from "react";
import CardDisplay from "./CardDisplay.jsx";
import TitleBanner from "./TitleBanner.jsx";

export default function CategoryDashboard({ category, preSelected, users }) {
  return (
    <div>
      <TitleBanner category={category} preSelected={preSelected} />
      <CardDisplay users={users} />
    </div>
  );
}
