/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import DietList from "../widgets/DietList";

function DietSection(props) {
  const dietItems = props.dietItems;
  const setDietItems = props.setDietItems;

  return (
    <>
      <h1>Daily Diet Plan</h1>
      <DietList dietItems={dietItems} setDietItems={setDietItems} />
    </>
  );
}

export default DietSection;
