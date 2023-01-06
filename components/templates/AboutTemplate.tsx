import { NextPage } from "next";
import React from "react";
export const queryObjects = async () => {
  const response = await fetch("/api/blocks");
  const data = await response.json();
  console.log(data);
};

const AboutTemplate: NextPage = () => {
  React.useEffect(() => {
    queryObjects();
  }, []);
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default AboutTemplate;
