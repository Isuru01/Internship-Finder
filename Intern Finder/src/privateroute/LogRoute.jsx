import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import SignIn from "../pages/SignIn";
import { useQuery } from "@tanstack/react-query";
import { authUser } from "../api/auth.api.mjs";
import { useNavigate } from "react-router-dom";

const LogRoute = ({ children }) => {
  // const { authenticate, setAuthenticate } = useContext(AuthContext);

  // const authenticate = true;

  const naviagate = useNavigate();

  const { isLoading, data } = useQuery({
    queryFn: authUser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      naviagate("/signin");
    },
  });

  if (isLoading) return <div>Loading</div>;

  return children;
};

export default LogRoute;
