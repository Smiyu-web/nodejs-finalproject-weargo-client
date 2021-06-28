import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import ListByTag from "../components/home/ListByTag";
import Layout from "../components/layout";
import { setCurrentUser, login } from "../features/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const isUser = useSelector(setCurrentUser);

  console.log("index: " + isUser.user);

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
            console.log(response.data);
            dispatch(
              // login({ user: loginRef.data.user, token: loginRef.data.token })

              login({ user: response.data.users, token: token })
            );
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
        <ListByTag />
        <ListByTag />
        <ListByTag />
        <Footer />
      </Layout>
    </div>
  );
}
