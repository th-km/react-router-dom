import React from "react";
import MainLayout from "../components/MainLayout";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();

  return (
    <MainLayout>
      <h1>About page</h1>
      <button onClick={() => history.push("/")}>Go back &larr;</button>
    </MainLayout>
  );
}

export default About;
