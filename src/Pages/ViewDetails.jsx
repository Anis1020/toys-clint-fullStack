import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const id = useParams();
  const singleData = useLoaderData();
  console.log(singleData);
  console.log(id);
  return (
    <div>
      <h2>from view details</h2>
    </div>
  );
};

export default ViewDetails;
