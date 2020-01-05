import React from "react";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  return (
    <MainLayout>
      <h1>Hello {userId}</h1>
    </MainLayout>
  );
}

export default User;
