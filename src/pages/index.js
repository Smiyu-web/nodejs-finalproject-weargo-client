import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";

import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Feature from "../components/home/Feature";
import Layout from "../components/layout";
import { login } from "../features/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        `http://localhost:4000/users/tokenIsValid`,
        null,
        {
          headers: { "x-auth-token": token },
        }
      );

      if (tokenRes.data) {
        Axios.get(`http://localhost:4000/users/`, {
          headers: { "x-auth-token": token },
        })
          .then((response) => {
            // console.log(response.data);
            dispatch(login({ user: response.data.users, token: token }));
          })
          .catch((err) => console.log(err));
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div>
      <Layout>
        <Hero />
        <Feature />

        <Footer />
      </Layout>
    </div>
  );
}
