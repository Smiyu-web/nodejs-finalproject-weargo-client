import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import Layout from "../../components/layout";
import AddStyle from "../../components/outfit/AddStyle";

import { setCurrentUser } from "../../features/userSlice";

const AddStylePage = () => {
  const isUser = useSelector(setCurrentUser);
  console.log(isUser.user);

  return (
    <Layout style="h-screen">
      {isUser ? (
        <AddStyle />
      ) : (
        <div className="pt-56 text-center">
          <h6 className="">You are not logged in.</h6>
          <Link href="/user/login">
            <a>Log in</a>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default AddStylePage;
