import { NextPage } from "next";
import { Suspense, useEffect } from "react";

export const queryObjects = async () => {
  const response = await fetch("/api/blocks");
  const data = await response.json();
  console.log(data);
};

const About: NextPage = () => {
  useEffect(() => {
    queryObjects();
  }, []);

  return (
    <div>
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <h1>About</h1>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default About;
