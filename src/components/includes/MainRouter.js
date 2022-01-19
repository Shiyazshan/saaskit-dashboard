import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "../../context/Store";
import { AuthRoute } from "../AuthRoute";
import Loading from "../Loading";
import { PrivateRoute } from "../PrivateRoute";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";

export default function MainRouter() {
  const { dispatch } = useContext(Context);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      let promise = new Promise((resolve, reject) => {
        let userDataStored = JSON.parse(localStorage.getItem("userdata"));
        dispatch({
          type: "UPDATE_USER",
          payload: userDataStored,
        });

        setTimeout(() => {
          resolve("done!");
          setLoading(false);
        }, 500);
      });

    let result = await promise; 

    };
    
    fetchUserData();

  }, []);

  return isLoading ? (
    <Loading/>
  ) : (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <AppRouter />
          </PrivateRoute>
        }
      />
      <Route
        path="login/*"
        element={
          <AuthRoute>
            <AuthRouter />
          </AuthRoute>
        }
      />
    </Routes>
  );
}
