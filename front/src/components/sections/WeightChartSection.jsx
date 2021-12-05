/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import WeightChart from "../widgets/WeightChart";
import WeightEdit from "../widgets/WeightEdit";

function WeightChartSection(props) {
  return (
    <>
      <h1>Daily Weight Record</h1>
      <WeightEdit
        weightRecords={props.weightRecords}
        setWeightRecords={props.setWeightRecords}
      />
      <WeightChart
        weightRecords={props.weightRecords}
        setWeightRecords={props.setWeightRecords}
      />
    </>
  );
}

export default WeightChartSection;
